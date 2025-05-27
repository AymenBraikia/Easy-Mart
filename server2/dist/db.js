"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connectDB;
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("mongodb");
dotenv_1.default.config();
const uri = process.env.MONGO_URI || "";
console.log(uri);
const client = new mongodb_1.MongoClient(uri);
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client;
    }
    catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}
