// const filter = { _id: "someId" }; // or any unique condition
// const update = { $set: { fieldToUpdate: "newValue" } };

// const result = await collection.updateOne(filter, update);

import connectDB from "./db";

const client = (async () => {
	return (await connectDB()).db("easyMart");
})();

async function editManyProps(Old:string,New:string) {
	const db = await client;

	const collection = db.collection("products");

	const filter = { _id: "someId" }; // or any unique condition
	const update = { $set: { fieldToUpdate: "newValue" } };

	const result = await collection.updateMany({ category: Old }, { $set: { category: New } });
}
editManyProps("Furniture","Home & Garden")
editManyProps("Shoes","Sports")
editManyProps("Musical Instruments","Electronics")
