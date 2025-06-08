import express from "express";
import connectDB from "./db";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";

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

app.get("/wishList", async (req, res) => {
	const { username } = req.query;

	const userData = await (await db).collection("users").findOne({ username: username });

	if (!userData) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	const data = (await getAllProducts()).filter((e) => userData.wishList.includes(e.id));

	for (const e of data) {
		e.secondaryImgs.length = 1;
	}

	res.json(JSON.stringify({ wishList: data }));
});

app.get("/cart", async (req, res) => {
	const { username } = req.query;

	const userData = await (await db).collection("users").findOne({ username: username });

	if (!userData) {
		res.status(400).json(JSON.stringify({ success: false, reason: "user not found" }));
		return;
	}

	const data = (await getAllProducts()).filter((e) => userData.cart.includes(e.id));

	for (const e of data) {
		e.secondaryImgs.length = 1;
	}

	res.json(JSON.stringify({ cart: data }));
});

app.post("/removeCart", async (req, res) => {
	const data = await (await db).collection("users").findOne({ username: req.body.username });
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

app.post("/removeWishList", async (req, res) => {
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

app.post("/atc", async (req, res) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		res.status(400).json(JSON.stringify({ success: false, reason: "You are not logged in" }));
		return;
	}
	const userTokenInfo = jwt.decode(token) as JwtPayload;
	const username = userTokenInfo.cookie.val;

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

app.post("/atw", async (req, res) => {
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

	const token = jwt.sign(
		{
			cookie: { name: "username", val: info.username },
			url: req.headers.origin || "http://localhost:3000/",
		},
		JWT_KEY
	);

	res.json(JSON.stringify({ Token: token }));
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

	const token = jwt.sign(
		{
			cookie: { name: "username", val: data.username },
			url: req.headers.origin || "http://localhost:3000/",
		},
		JWT_KEY
	);

	res.json(JSON.stringify({ Token: token }));
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

async function getAllProducts() {
	return await (await db).collection("products").find({}).toArray();
}
