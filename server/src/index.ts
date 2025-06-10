import express, { NextFunction, Request, Response } from "express";
import connectDB from "./db";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";

console.clear();

const JWT_KEY = process.env.SECRET_KEY || "c353195d5a3b7852a2df6b08dd7c59c8085f534fa44c013840baef5559f2ae05";

const db = (async () => {
	return (await connectDB()).db("easyMart");
})();

const app = express();

app.use(
	cors({
		origin: (origin, callback) => callback(null, true),
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 8000;

function middleWare(req: Request, res: Response, next: NextFunction) {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		res.status(401).json(JSON.stringify({ success: false, reason: "You are not logged in" }));
		return;
	}

	jwt.verify(token, JWT_KEY, (err, data) => {
		if (err) {
			res.status(403).json(JSON.stringify({ success: false, reason: "Bad request" }));
			return;
		}

		req.body = {};
		req.body.username = data;
		next();
	});
}

app.get("/", (req, res) => {
	res.send("Hello TypeScript with Express!");
});

app.get("/products", async (req, res) => {
	const data = await getAllProducts();

	res.json(JSON.stringify(data));
});

app.get("/singleProduct", async (req, res) => {
	const { id } = req.query;

	const data = await (await db).collection("products").findOne({ id: Number(id) });

	res.json(JSON.stringify(data));
});

app.get("/wishList", middleWare, async (req, res) => {
	const { username } = req.body;

	const userData = await (await db).collection("users").findOne({ username: username });

	if (!userData) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	const data = (await getAllProducts()).filter((e) => userData.wishList.includes(e.id));

	for (const e of data) {
		e.secondaryImgs.length = 1;
	}
	const idsOnly = req.headers.idsonly;
	console.log(idsOnly);

	res.json(JSON.stringify(idsOnly ? data.map((e) => e.id) : data));
});

app.get("/cart", middleWare, async (req, res) => {
	const { username } = req.body;

	const userData = await (await db).collection("users").findOne({ username: username });

	if (!userData) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	const data = (await getAllProducts()).filter((e) => userData.cart.includes(e.id));

	for (const e of data) {
		e.secondaryImgs.length = 1;
	}

	const idsOnly = req.headers.idsonly;
	console.log(idsOnly);

	res.json(JSON.stringify(idsOnly ? data.map((e) => e.id) : data));
});

app.post("/removeCart", middleWare, async (req, res) => {
	const username = req.body.username;
	console.log(username);

	const data = await (await db).collection("users").findOne({ username: username });
	if (!data) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	(await db).collection("users").updateOne(
		{ username: req.body.username },
		{
			$set: {
				cart: [...data.cart.filter((e: number) => e !== req.body.id)],
			},
		}
	);

	res.json(JSON.stringify({ success: true }));
});

app.post("/removeWishList", middleWare, async (req, res) => {
	const data = await (await db).collection("users").findOne({ username: req.body.username });
	if (!data) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	(await db).collection("users").updateOne(
		{ username: req.body.username },
		{
			$set: {
				wishList: [...data.wishList.filter((e: number) => e !== req.body.id)],
			},
		}
	);

	res.json(JSON.stringify({ success: true }));
});

app.post("/atc", middleWare, async (req, res) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		res.status(400).json(JSON.stringify({ success: false, reason: "You are not logged in" }));
		return;
	}
	const username = req.body.username;

	const data = await (await db).collection("users").findOne({ username: username });

	if (!data) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	(await db).collection("users").updateOne(
		{ username: username },
		{
			$set: {
				cart: [...data.cart, req.body.id],
			},
		}
	);

	res.json(JSON.stringify({ success: true }));
});

app.post("/atw", middleWare, async (req, res) => {
	const data = await (await db).collection("users").findOne({ username: req.body.username });
	if (!data) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	(await db).collection("users").updateOne(
		{ username: req.body.username },
		{
			$set: {
				wishList: [...data.wishList, req.body.id],
			},
		}
	);

	res.json(JSON.stringify({ success: true }));
});

interface userInfo {
	email: string;
	password: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function validate(obj: userInfo) {
	if (!obj.email || !obj.password) return [false, "Bad Request"];

	const passwordTest = passwordRegex.test(obj.password);
	const email = emailRegex.test(obj.email);

	if (!email) return [false, "Email is not in the correct format"];
	if (!passwordTest)
		return [
			false,
			`<span style='font-weight:bold'>Password is not in the correct format:</span><br> At least 8 characters<br> At least one uppercase letter<br> At least one lowercase letter<br> At least one digit<br> At least one special character`,
		];

	return [true];
}

app.post("/signup", async (req, res) => {
	const info = req.body;

	const validation = validate(info);

	if (!validation[0]) {
		res.status(400).json(
			JSON.stringify({
				reason: validation[1],
			})
		);
		return;
	}

	const users = (await db).collection("users");

	if (await users.findOne({ email: info.email })) {
		res.status(400).json(
			JSON.stringify({
				reason: "This email is taken use another one.",
			})
		);
		return;
	} else if (await users.findOne({ username: info.username })) {
		res.status(400).json(
			JSON.stringify({
				reason: "This username is taken use another one.",
			})
		);
		return;
	}

	users.insertOne({ username: info.username, email: info.email, password: info.password, cart: [], wishList: [] });

	const token = jwt.sign(info.username, JWT_KEY);

	res.json(JSON.stringify({ Token: token, cookie: { name: "username", val: info.username }, url: req.headers.origin || "http://localhost:3000/" }));
});

app.post("/signin", async (req, res) => {
	const info = req.body;
	const validation = validate(info);

	if (!validation[0]) {
		res.status(400).json(
			JSON.stringify({
				reason: validation[1],
			})
		);
		return;
	}

	const data = await (await db).collection("users").findOne({ email: info.email, password: info.password });

	if (!data) {
		res.status(400).json(
			JSON.stringify({
				reason: "Could not find a user with the given information, Try to create an account if you don't have one",
			})
		);
		return;
	}
	if (typeof data.username !== "string") return;

	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		const newToken = jwt.sign(data.username, JWT_KEY);

		res.status(200).json(JSON.stringify({ Token: newToken, cookie: { name: "username", val: data.username }, url: req.headers.origin || "http://localhost:3000/" }));
		return;
	}

	jwt.verify(token, JWT_KEY, (err, data) => {
		if (err) return res.status(403).json(JSON.stringify({ success: false, reason: "Bad request" }));

		res.json(JSON.stringify({ cookie: { name: "username", val: data }, url: req.headers.origin || "http://localhost:3000/" }));
	});
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

async function getAllProducts() {
	return await (await db).collection("products").find({}).toArray();
}
