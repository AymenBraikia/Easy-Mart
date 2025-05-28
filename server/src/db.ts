import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGO_URI || "";

console.log(uri)

const client = new MongoClient(uri);

export default async function connectDB() {
	try {
		await client.connect();
		console.log("Connected to MongoDB");

		return client;
	} catch (error) {
		console.error("Failed to connect to MongoDB", error);
		throw error;
	}
}
