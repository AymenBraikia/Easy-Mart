import express from "express";
import connectDB from "./db";
import cors from "cors";

const db = (async () => {
	return (await connectDB()).db("EasyMart");
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
app.use(express.static("../public"));

const port = 8000;

app.get("/", (req, res) => {
	res.send("Hello TypeScript with Express!");
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

	users.insertOne({ username: info.username, email: info.email, password: info.password });

	res.json(
		JSON.stringify({
			cookie: { name: "username", val: info.username },
			url: req.headers.origin || "http://localhost:3000/",
		})
	);
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

	res.json(
		JSON.stringify({
			cookie: { name: "username", val: data.username },
			url: req.headers.origin || "http://localhost:3000/",
		})
	);
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});