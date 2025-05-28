"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const cors_1 = __importDefault(require("cors"));
const db = (async () => {
    return (await (0, db_1.default)()).db("Neuro");
})();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static("../public"));
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello TypeScript with Express!");
});
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
function validate(obj) {
    if (!obj.email || !obj.password)
        return [false, "Bad Request"];
    const passwordTest = passwordRegex.test(obj.password);
    const email = emailRegex.test(obj.email);
    if (!email)
        return [false, "Email is not in the correct format"];
    if (!passwordTest)
        return [false, `Password is not in the correct format:, At least 8 characters, At least one uppercase letter, At least one lowercase letter, At least one digit, At least one special character`];
    return [true];
}
app.post("/signup", async (req, res) => {
    const info = req.body;
    const validation = validate(info);
    if (!validation[0]) {
        res
            .status(400)
            .cookie("reason", validation[1], { maxAge: 60 * 1e3 * 5 })
            .redirect(req.headers.origin + "/error");
        return;
    }
    const users = (await db).collection("users");
    if (await users.findOne({ email: info.email })) {
        // res.json({ state: false, reason: "This email is taken use another one" });
        res
            .status(400)
            .cookie("reason", "This email is taken use another one.", { maxAge: 60 * 1e3 * 5 })
            .redirect(req.headers.origin + "/error");
        return;
    }
    else if (await users.findOne({ username: info.username })) {
        // res.status(400).cookie("reason", "This username is taken use another one.").redirect(req.headers.origin + "/error");
        res
            .status(400)
            .cookie("reason", "This username is taken use another one.", { maxAge: 60 * 1e3 * 5 })
            .redirect(req.headers.origin + "/error");
        return;
    }
    users.insertOne({ username: info.username, email: info.email, password: info.password });
    res
        .status(200)
        .cookie("username", info.username)
        .redirect(req.headers.origin || "http://localhost:3000/");
});
app.post("/signin", async (req, res) => {
    const info = req.body;
    const validation = validate(info);
    if (!validation[0]) {
        res
            .status(400)
            .cookie("reason", validation[1], { maxAge: 60 * 1e3 * 5 })
            .redirect(req.headers.origin + "/error");
        return;
    }
    const data = await (await db).collection("users").findOne({ email: info.email, password: info.password });
    if (!data) {
        console.log("not found");
        res
            .status(400)
            .cookie("reason", "Could not find a user with the given information, Try to create an account if you don't have one", { maxAge: 60 * 1e3 * 5 })
            .redirect(req.headers.origin + "/error");
        return;
    }
    res.cookie("username", data.username, { httpOnly: true, secure: true, sameSite: "none" }).send(`<script>window.location.href = "${req.headers.origin || "http://localhost:3000/"}"</script>`);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
