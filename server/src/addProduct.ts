import connectDB from "./db";

const client = (async () => {
	return (await connectDB()).db("easyMart");
})();

interface prod {
	name: string;
	description: string;
	image: string;
	secondaryImgs: string[];
	rating: { rate: number; count: number };
	price: number;
	id: number;
	category: string;
}

async function addOneProduct(product: prod) {
	const db = await client

	db.collection("products").insertOne(product)
}

[
	{
		name: "Modern Minimalist Workstation Setup",
		description:
			"Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
		image: "https://i.imgur.com/Qphac99.jpeg",
		secondaryImgs: ["https://i.imgur.com/3oXNBst.jpeg", "https://i.imgur.com/ErYYZnT.jpeg", "https://i.imgur.com/boBPwYW.jpeg"],
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		price: 490,
		id: 33,
		category: "Furniture",
	},
	{
		id: 34,
		name: "Modern Ergonomic Office Chair",
		price: 71,
		description:
			"Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
		category: "Furniture",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/3dU0m72.jpeg", "https://i.imgur.com/zPU3EVa.jpeg"],
	},
	{
		id: 35,
		name: "Futuristic Holographic Soccer Cleats",
		price: 40,
		description:
			"Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/qNOjJje.jpeg"],
	},
	{
		id: 36,
		name: "Rainbow Glitter High Heels",
		price: 40,
		description:
			"Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/62gGzeF.jpeg"],
	},
	{
		id: 37,
		name: "Chic Summer Denim Espadrille Sandals",
		price: 33,
		description:
			"Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge. The easy slip-on design ensures convenience for beach days or casual outings.",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/9qrmE1b.jpeg", "https://i.imgur.com/wqKxBVH.jpeg", "https://i.imgur.com/sWSV6DK.jpeg"],
	},
	{
		id: 38,
		name: "Vibrant Runners: Bold Orange & Blue Sneakers",
		price: 27,
		description:
			"Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles, perfect for active individuals who don't compromise on style. The reflective silver accents add a touch of modernity, making them a standout accessory for your workout or casual wear.",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/hKcMNJs.jpeg", "https://i.imgur.com/NYToymX.jpeg", "https://i.imgur.com/HiiapCt.jpeg"],
	},
	{
		id: 39,
		name: "Vibrant Pink Classic Sneakers",
		price: 84,
		description:
			"Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/mcW42Gi.jpeg", "https://i.imgur.com/mhn7qsF.jpeg", "https://i.imgur.com/F8vhnFJ.jpeg"],
	},
	{
		id: 40,
		name: "Futuristic Silver and Gold High-Top Sneaker",
		price: 68,
		description:
			"Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/npLfCGq.jpeg", "https://i.imgur.com/vYim3gj.jpeg", "https://i.imgur.com/HxuHwBO.jpeg"],
	},
	{
		id: 41,
		name: "Futuristic Chic High-Heel Boots",
		price: 36,
		description:
			"Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/HqYqLnW.jpeg", "https://i.imgur.com/RlDGnZw.jpeg", "https://i.imgur.com/qa0O6fg.jpeg"],
	},
	{
		id: 43,
		name: "Elegant Purple Leather Loafers",
		price: 17,
		description:
			"Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish, these shoes feature a classic loafer silhouette that's been updated with a contemporary twist. The comfortable slip-on design and durable soles ensure both style and functionality for the modern man.",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/Au8J9sX.jpeg", "https://i.imgur.com/gdr8BW2.jpeg", "https://i.imgur.com/KDCZxnJ.jpeg"],
	},
	{
		id: 44,
		name: "Classic Blue Suede Casual Shoes",
		price: 39,
		description:
			"Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper, durable rubber soles for superior traction, and classic lace-up fronts for a snug fit. The sleek design pairs well with both jeans and chinos, making them a versatile addition to any wardrobe.",
		category: "Shoes",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/sC0ztOB.jpeg", "https://i.imgur.com/Jf9DL9R.jpeg", "https://i.imgur.com/R1IN95T.jpeg"],
	},
	{
		id: 45,
		name: "Sleek Futuristic Electric Bicycle",
		price: 22,
		description:
			"This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame, enhanced battery life, and integrated tech capabilities, it's perfect for the eco-conscious commuter looking to navigate the city with ease.",
		category: "Miscellaneous",
		image: "https://i.imgur.com/BG8J0Fj.jpg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/BG8J0Fj.jpg", "https://i.imgur.com/ujHBpCX.jpg", "https://i.imgur.com/WHeVL9H.jpg"],
	},
	{
		id: 46,
		name: "Sleek All-Terrain Go-Kart",
		price: 37,
		description:
			"Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires perfect for handling a variety of terrains. Designed for fun-seekers of all ages, this go-kart is an ideal choice for backyard racing or exploring local trails.",
		category: "Miscellaneous",
		image: "https://i.imgur.com/BG8J0Fj.jpg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/Ex5x3IU.jpg", "https://i.imgur.com/z7wAQwe.jpg", "https://i.imgur.com/kc0Dj9S.jpg"],
	},
	{
		id: 47,
		name: "Radiant Citrus Eau de Parfum",
		price: 73,
		description:
			"Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance. Perfect for daily wear, it's an olfactory delight that leaves a lasting, zesty impression.",
		category: "Miscellaneous",
		image: "https://i.imgur.com/BG8J0Fj.jpg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/xPDwUb3.jpg", "https://i.imgur.com/3rfp691.jpg", "https://i.imgur.com/kG05a29.jpg"],
	},
	{
		id: 127,
		name: "New Cotton Shirt2",
		price: 1100,
		description: "Very nice and attractive",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placeimg.com/640/480/cotton"],
	},
	{
		id: 128,
		name: "Mobile Phones",
		price: 10,
		description: "A description",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placeimg.com/640/480/any"],
	},
	{
		id: 129,
		name: "Updated Test Anton QA product",
		price: 77,
		description: "Updated product description from Postman",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://secondaryImgs.app.goo.gl/y6kmtHCayCaYvotW8"],
	},
	{
		id: 133,
		name: "Tash Sultana Stratocaster®",
		price: 1250,
		description: "Tash Sultana's explosive loop-based performances, gorgeous layered guitar parts and jubilant leads rocketed the Melbourne artist from street busking to sold out shows - with a Fender in hand from the beginning.",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/NOEQcdi.png"],
	},
	{
		id: 134,
		name: "Tom DeLonge Stratocaster®",
		price: 1150,
		description:
			"Blink-182 guitarist Tom DeLonge has teamed up with Fender once again to release The Tom DeLonge Stratocaster®. This iconic Strat® makes a comeback just in time for Blink's reunion tour and the much-anticipated release of their latest album.",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/M4Yt0L8.png"],
	},
	{
		id: 135,
		name: "Player II Modified Stratocaster® HSS Floyd Rose®",
		price: 1150,
		description: "The Player II Modified Stratocaster® HSS Floyd Rose® is a classic guitar with the modern player in mind. Floyd Rose® system allows for extreme whammy bar use without going out of tune.",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/m5DeCoc.png"],
	},
	{
		id: 142,
		name: "Shaf",
		price: 50,
		description: "asdfasdas",
		category: "Furniture",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://freeimage.host/i/3mrbAua"],
	},
	{
		id: 144,
		name: "Tobias",
		price: 99999,
		description: "Makan beef di Hanamasa, TL Team 2 terbaik sepanjang masa",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://ybmq92bflj.ufs.sh/f/OiRxrZt1JqQ4CISMD9D3RfX59ZPjs6OUdGVqBiH0rFAY34Lt"],
	},
	{
		id: 146,
		name: "New Product1",
		price: 10,
		description: "A description1",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placehold.co/600x400"],
	},
	{
		id: 153,
		name: "Airpods",
		price: 99,
		description: "Audifonos inalambricos negros.",
		category: "Furniture",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://example.com/image1.jpg", "https://example.com/image2.png", "https://example.com/image3.gif"],
	},
	{
		id: 155,
		name: "New Product Utku",
		price: 1000,
		description: "A description",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placehold.co/600x400"],
	},
	{
		id: 156,
		name: "Carro",
		price: 100,
		description: "Color negro",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placehold.co/600x400"],
	},
	{
		id: 157,
		name: "Carro1",
		price: 100,
		description: "Color negro",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placehold.co/600x400"],
	},
	{
		id: 158,
		name: "Carro2",
		price: 100,
		description: "Color negro",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placehold.co/600x400"],
	},
	{
		id: 160,
		name: "Moto",
		price: 100,
		description: "Color Rojo",
		category: "Furniture",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placehold.co/600x400"],
	},
	{
		id: 161,
		name: "Bicileta",
		price: 100,
		description: "Color Azul",
		category: "Furniture",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://placehold.co/600x400"],
	},
	{
		id: 162,
		name: "Nuevo Producto Creado 1748372744554",
		price: 73,
		description: "Descripción de un producto de prueba.",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.pravatar.cc/640?r=0.0657094056756441"],
	},
	{
		id: 163,
		name: "Nuevo Producto Creado 1748372745424",
		price: 60,
		description: "Descripción de un producto de prueba.",
		category: "Updated Utku Category",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.pravatar.cc/640?r=0.9899025225461116"],
	},
	{
		id: 165,
		name: "TESTING SYNC",
		price: 54,
		description: "SYNC",
		category: "Furniture",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: +(4 + Math.random() * 1).toFixed(1),
			count: Math.floor(50 + Math.random() * 100),
		},
		secondaryImgs: ["https://i.imgur.com/6wkyyIN.jpeg"],
	},
].forEach((prod: prod) => {
	addOneProduct(prod);
});
