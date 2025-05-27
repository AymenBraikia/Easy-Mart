import connectDB from "./db";

const db = (async () => {
    return (await connectDB()).db("EasyMart");
})();

interface product {
	name: string;
	imgSrc: StaticImageData;
	ratingCount: string;
	rating: string;
	priceNew: number;
	priceOld: number;
}

const products: product[] = [
	{
		name: "Wireless Bluetooth Headphones",
		imgSrc: headPhones,
		ratingCount: "142",
		rating: "4.5",
		priceNew: 89.99,
		priceOld: 129.99,
	},
	{
		name: "Smart Fitness Watch",
		imgSrc: smartWatch,
		ratingCount: "324",
		rating: "4.8",
		priceNew: 89.99,
		priceOld: 129.99,
	},
	{
		name: "Organic Cotton T-Shirt",
		imgSrc: tShirt,
		ratingCount: "156",
		rating: "4.6",
		priceNew: 24.99,
		priceOld: 34.99,
	},
	{
		name: "Professional Camera Lens",
		imgSrc: cameraLens,
		ratingCount: "89",
		rating: "4.9",
		priceNew: 499.99,
		priceOld: 599.99,
	},
	{
		name: "Artisan Coffee Beans",
		imgSrc: coffee,
		ratingCount: "67",
		rating: "4.7",
		priceNew: 18.99,
		priceOld: 24.99,
	},
	{
		name: "Minimalist Desk Lamp",
		imgSrc: deskLamp,
		ratingCount: "203",
		rating: "4.8",
		priceNew: 79.99,
		priceOld: 99.99,
	},
];


function addOneProduct(product:prod){

}