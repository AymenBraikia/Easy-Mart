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
let counter = 1,
	reseted = false;

async function addOneProduct(product: prod) {
	const db = await client;
	if (!reseted) {
		reseted = true;

		await db.collection("products").deleteMany({});
	}
	await db.collection("products").insertOne(product);
}

const products = [
	{
		id: counter++,
		name: "24 Inch Monitor",
		price: 73.99,
		description: "GreBear IPS Computer Monitor 24 Inch, FHD 1080p PC Monitor 5ms(GTG) 99% sRGB,Ultra Slim, LED Low Blue Light An",
		category: "Electronics",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd7be7b4896e6441f998d85d9c62b68cdU.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2c88199abc6442169eb802a210e66db0V.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Scdd0273eb9ec41aea2edc051ba6c3c336.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sfcdb6a23de7e4341a5528c99ddc6b29dN.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb81b1188c7ee4c83be390ff18e8b7c0bU.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S6a99e7931d154394b265dbf4c77e4e97I.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Membrane Keyboard",
		price: 37.99,
		description: "KB98 Wireless Membrane Keyboard Bluetooth Three Mode 2.4G Wired Connection 98-Key RGB Backlit PBT Keycaps for PC/IPhone iPad",
		category: "Electronics",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf0e138dd5bff41f6b511bac4d727dfbdF.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sa7166d3f1cb3417d8080c25e7f147df6q.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S63880710c09d4b468729c60108fdc0f3J.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4b307d8f16f2428e9c7a2189dbf620432.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/See45aa84b9bb4cdbbbe12ed7db9bd6b5w.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S498574627d2a40789273767906292739i.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S06966d24300647e594a070a8cafc04b41.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S6a1fc2cd9247422bad399dff15438525s.png_960x960.png_.avif",
		],
	},
	{
		id: counter++,
		name: "Attack Shark R1 Wireless Mouse",
		price: 22.99,
		description: "Attack Shark R1 Wireless Mouse,18000dpi,1000Hz PAW3311 ,Bluetooth Tri-mode Connection, Macro Gaming Mouse",
		category: "Electronics",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf8c18c862b8645c38486e88ea106aeedW.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S7a6c16a86be248b5bfd200a30469754dz.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Saabd0c1aeb0e429d91905d9937e812b2S.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S083d3f3cc9144261a82b7dff527ee197W.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se5759ac593904a1ea1a0bf49cd95234fa.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S96a76fc2a4b64499ab140d22d029a7afJ.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S21f7b52661894649a8de594d01bb32aa7.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S51f8c5c5af784b369608af9b245dfce7x.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8c4e993a6bd74cb1ba082875ae0d9860y.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Men Suit",
		price: 45.99,
		description: "Men Skinny 3 Pieces Set Formal Slim Fit Tuxedo Prom Suit / Male Groom Wedding Blazers High Quality Dress Jacket Coat Pants Vest",
		category: "Fashion",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf82c70357ead435e8fa343cf8d560b5ah.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S3529dbb3d1e745d3af25c1080eaf574aQ.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S91a866de4c81427e9508762bc3ce3080g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S134644a020d74b64a6343dd61dcddd46c.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Seea43506f2324430bf2a95f92216428c2.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S9b7c0887dd7c44c4883008d11416ea2f2.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S10c04aef69294e58b2a42ebaa67583edD.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4549e9c6d195456b9022a5350b6af802c.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S3e39cdb2d96741cd86ebe42a9fc09e7fR.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd1568797f2b546339ce8b59695bd64d9B.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S5ab98d928644435a81e7dd6e4ae6539fS.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf3993ebc648a4e86887d7d85a7a4be1dp.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S1b8a571714ac4ac596904649025dc898v.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sfd6b0196ba964ff6ae56976fbde4b9e35.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2f59909108104713ba20999caa147515s.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se2a8d40579534e4fb22285fdc15be9e6A.jpg_960x960q75.jpg_.avif",		],
	},
	{
		id: counter++,
		name: "Small Wooden	Flute",
		price: 5.99,
		description: "1 Pc Small Wooden Colorful Piccolo Flute for Kids Learning Rhythm Musical Instrument Early Education Music Sound Toys for Kids",
		category: "Toys",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S7b03308acc404878b53323f9d1d1f7bfA.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4710e680556140c4940dc66142d459421.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb6a5e914fa984463bea385a478ff8409P.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S604729afdeee4e509f178eccd5789a72A.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S0e8a3899c0544a5d92414101c2998deaD.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se81b15c169734673bec82e4e71ed32ddw.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Atomic Habits",
		price: 13.99,
		description: "Atomic Habits By James Clear An Easy Proven Way To Build Good Habits Break Bad Ones Self-management Self-improvement Books",
		category: "Books",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S9b3fbfa4ede6483d880eb64ea97b0c3dq.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S43e7220733c645c7b875f9b2a004e374H.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S34c75f7b27334e96b0a64f5728429e4bH.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Saac124701b4642209c459be1b64d86dd8.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd1eae8c5837641368b746fb2770c7978w.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S65681896beac45e3af430ca7beeba4532.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Surrounded By Idiots",
		price: 8.99,
		description: "Surrounded By Idiots The Four Types of Human Behavior By Thomas Erikson English Book Bestseller Novel",
		category: "Books",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S5f1a5233cf964e19ba6162c32a14cdf4g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc8513231759a471aadbe6261cac8fc60g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S6de25983d698468bb9831ab3d6bef6faX.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S9635d41dfd74416486f71eceb47a115eK.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S333b76183f2c46b7a9866077ae19631fx.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd4d7a824d2d74905b99f751d823b0164g.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Stop Overthinking",
		price: 7.5,
		description: "Stop Overthinking in English Paperback in English Paperback English Book",
		category: "Books",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S1b992e7dafc64981b38059cd4a7dbe0d4.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S3ce1ea12e82c4f44b2b4e78ff187a3b9O.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S0374c838e48a4e18b9b6ec667d70d986k.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S40bf06f0b63c4759a73dba21f982ed14H.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S5eed9d206a0b411ab75057701b9d066bc.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Seb91b6e671b64ea5915ac951869693baY.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Solar Up and Down Spot Lights",
		price: 12,
		description: "Solar Up and Down Spot Lights Outdoor Street Wall Light Lamp Solar Powered Sunlight Waterproof Solar Lamp Garden Decorative",
		category: "Home & Garden",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S2557570ae9ed46d4aaabfcd535d740b0M.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8516fb50289c4f2ba74c15d9ddfb8803z.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S0a0d93d19ac343f9b8457429d21e113bB.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S11c8c9a4d1c14dd5bb388bece21fdc55b.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S1ccdb275dc3c4d59a64ba4e7184ded62r.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sceb5b8c10232408d9568a0603dc7962fM.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S807de810bda247ad993bb58d56acc31e0.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Scf9f847773034c3b8379727f8e7e815ds.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf5a5e30a5aa449f5b19b4b73ad47cb77Z.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S23265bc13eea47739735ea90b4f9d9293.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2ae47bce492b46369386a1cae6d499b7o.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S532828e0945d458b9acdb39e92d0c1bex.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Tv Remote Stand",
		price: 12,
		description: "4 Section Tv Remote Control Stand Holder Home Appliance Remote Control Storage Rack Desktop Bracket For Home Living Room Office",
		category: "Home & Garden",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf70269b9e00e4744aff1ca0b514d0c10U.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S32a864a8531e4e30860f30b92bbc2b79V.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Saa408c313ce04ba5b63935236b55366bX.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S11e01dcc729f42aabf82535ad6ee4817U.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd0ecf6d1bdab47e6b3a63c14cf7cdfc1n.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4193bba492e14bf4bbe5b3ee2314e625O.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb5db00181813456cbde00f1de53e46a0Q.jpeg_960x960q75.jpeg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sdf10ee6f48c54228af7d03eb8145380bd.jpeg_960x960q75.jpeg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc7944921f4714b5295ac0e4773648fc1x.jpeg_960x960q75.jpeg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S9f6a05abcd984ea8855578eedbd75e568.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S51f4ca51d69246fdad27a6d0273d2355y.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc796c10503a041819f62d59c83cafb94Z.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Tree of Life Poster Prints",
		price: 12,
		description: "Tree of Life Poster Prints Fantastic Magic Anime World Landscape Canvas Painting Modern Home Living Room Bedroom Decoration",
		category: "Home & Garden",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S0b766a79f65c47e8932f043f28941f62s.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb0ceffc10d7e47a08552b67ebf620dd4n.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S53b687fca082419c887b23a45d07e4b9R.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc81e4ef84c234581a4eec9145e5941f0W.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S04037091f0a04e75abc5a4b1a17d4569x.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S32174fbde3144300ad7cbfac1b49b4c5X.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S747776ae13294fdfa52d3e67971bdffav.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc8d01a61fb6549369fd822867e960770q.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S65828f1c68c140779ca98995c9d3cc81n.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S63cc0a458128459298.../S4899232ed8f14442b94e9239cb0f4d6b5.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S3386371fc5c947409882da742abcc426g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S443613c5516b48928563b80794b3b0b3t.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S1bf12082cd9e4c8fa2342135c76573bau.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc0a67733ce064cdd87f8b65288e60045R.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Scff7d84984064b04b2d45516d0dec80al.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S50f754f711e746578b24825afa43848ay.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4638c3751a63478bb99fde49ba1e6e271.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S845b9b549c9a4c7e80cb213678d10e210.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S27c0d705a17e4313939036177f66202dr.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Frameless Summer Painting",
		price: 7,
		description: "1PC Frameless Summer Tiny People Swimming in Ocean Posters Print Canvas Painting Modern Minimalist Wall Art Bedroom Home Decor",
		category: "Home & Garden",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sbc55fe1adb8c4938bb66a414cabba872c.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se0a7898c35324659a0b3632bbb226981H.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S99f9b779f7e84fb6aea56061055f26599.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sadf15ac8bf4d43a5ba34c8a00b4ca70dM.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sdfbbac1f40b64b318924f02d782766f79.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sfc298b7b2df64537bf6960fee70564eeA.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S08c4b7039fc14f07b01a3b573cabd573D.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Saff016ff42284d4ba3524c514d6ee735J.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd787a7513f264c0a821f20915d1522a7G.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc79a72279bf04a18823b892f72e72f53b.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8234f35205e84c3fa8a5aa1eee39ab25U.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sbf8f59a5152b4d508bb55ad3a936776dz.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sa36c58b2e3cc452887f0f90d6326252cZ.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sa17df36df9dc4bfebf61fcd2f1c7b280U.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		name: "Minimalist Workstation",
		description: "Elevate your home office with a sleek wooden desk, elegant computer, adjustable lamp, and complimentary accessories for a clean, productive, and contemporary workspace.",
		image: "https://i.imgur.com/Qphac99.jpeg",
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S162ee63fc619425d87b73e96978ff7d39.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S04e78f9bf5c44772a582730b32d8a7a8T.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S5da13dc8936a4afc9d5b47c646631ab5e.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Scd88eaa3eb3b4261bf425e92b34a6a66N.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb56a5b3a3531470e92d66b80cb3dadd31.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S01a745248956406da445e52eb15caf63Q.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd0a8de92c0544a13abb710b4e0884b9cZ.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2647352576a04546803679798084c1f6L.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2af3042269d54ba8bd52277735af84b67.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S5850c576f1f74eb791dd113e5bda95faI.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc91da662f02245e1bbbef564edb9e026N.jpg_960x960q75.jpg_.avif",
		],
		rating: {
			rate: 4.5,
			count: 75,
		},
		price: 1200,
		id: counter++,
		category: "Home & Garden",
	},
	{
		id: counter++,
		name: "Ergonomic Office Chair",
		price: 250,
		description: "Sleek and comfortable, this ergonomic office chair provides optimal support with adjustable height, smooth-rolling casters, and a cushioned seat. Its minimalist design suits any modern workspace.",
		category: "Home & Garden",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.3,
			count: 82,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S65dc27a41cfc49ffac9c6fe7cfe51586M.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S357a5ccaf114438bbc696a3ecb5fe008M.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4bf1caaf3455464d8d0af6c19cd6df7av.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S7daca2bafdf942fe8f0b108a2cea965eP.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Scfce9e25a45c4195b27765606a9a0e987.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Scd38e3bf92d84c5ea475da43010c159b4.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb155bb78aab04ac28f98b01c575add58N.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2fea634eb14b472584bd09cc67545f996.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Holographic Soccer Cleats",
		price: 120,
		description: "Stand out on the field with these eye-catching holographic soccer cleats. Featuring a sleek silhouette, lightweight construction, and durable studs for optimal traction, they're perfect for the fashion-forward athlete.",
		category: "Sports",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: 4.7,
			count: 91,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S81915fcb87d04d02ab3a4dc6c69d217e5.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S447d8f8fc67e4d49974da0a72ef006e3C.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S7f6207afe82b4f118d7a7a25a717d7b5u.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se3f3650f0e0e47eeacdefbb5f5fa1171E.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sa058ab5a470146cdb341295364297749y.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sbf5e21f8f7cc4decbf3bca38a3e10a33M.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sffadd51712c74ab297763fcdc84077f4b.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb8538df923d845ae889548cfc2ab60e5t.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S694e9a4a757f4e2b9f4078be745c4aa5B.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sec4ef3216634414085bbc91f5e128d1cx.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se838c9dbafe7477f9bd6a65eb90fec2bp.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Denim Espadrille Sandals",
		price: 75,
		description: "Step into summer style with these denim espadrille sandals, featuring a braided jute sole and adjustable denim straps for comfort and a fashionable edge. Perfect for beach days or casual outings.",
		category: "Fashion",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: 4.2,
			count: 68,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb88f648be6b64c76a88aceae8e81ed2eY.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S55ae86ad21524f689e24849120c411a1g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S0d83727cbaaf4b428cac0e67beae1c84I.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4feb79e47920445aab1c6cbe03164aecL.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S1ecfcbcf49ff4c3ea919c1169b9a6962O.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S7cbde38470164e4b8cddf4df4ad1cb1fg.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Orange & Blue Sneakers",
		price: 90,
		description: "Eye-catching sneakers with a striking combination of orange and blue hues. Designed for comfort and fashion with flexible soles, cushioned insoles, and reflective silver accents.",
		category: "Sports",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: 4.6,
			count: 105,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S02b4cf511cf24e919562a85466e0a2e9N.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S12e10503fed34c02a16b17fcf76aeffal.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2a37c6629c21489e8f3269a6d15bb667J.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se6862d5a82354816a3e7d2bd54908c34g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc294893ddeb34775a1123901b42d2a801.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Vibrant Pink Sneakers",
		price: 95,
		description: "Step into style with these vibrant pink classic sneakers, featuring a bold hue and iconic white detailing. Durable materials and a comfortable fit make them perfect for adding a pop of color to your everyday footwear.",
		category: "Sports",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: 4.4,
			count: 79,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S3ac06d3869364bc6801ed3a45aeb4db3R.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf550ed970b8241c29bba8355a5ee03f5d.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sa2aedcbdf4124e5b919ce07a6e412d5fJ.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S11a2e045fff44b39840e589e8d4c007ap.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S52bd3e506d7b42cfa688f5c65f00ddb8Q.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S989265ff5f8c402b8a7d8302521e53e0i.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		id: counter++,
		name: "Chic High-Heel Boots",
		price: 130,
		description: "Elevate your style with these cutting-edge high-heel boots, blending bold design with avant-garde aesthetics. Features a unique color-block heel, sleek silhouette, and versatile light grey finish.",
		category: "Fashion",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: 4.1,
			count: 55,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S126ff109e0d24e208738fff8f9107b9d6.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2c915a15c3b24c9595a8d9815bb1215fM.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S9091e137e99745e1848ff7e064f1186aW.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8875d946f8be4c698c7f35c85dde445bU.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S981cd7d9fea04475b04cc39cb8a27886r.png_960x960.png_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S66c1f7adf289491a976037dd8c72390cG.png_960x960.png_.avif",
		],
	},
	{
		id: counter++,
		name: "Purple Leather Loafers",
		price: 80,
		description: "Step into sophistication with these elegant purple leather loafers. Crafted from high-quality leather with a vibrant finish, they offer a contemporary twist on a classic silhouette, providing both style and comfort.",
		category: "Fashion",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: 4.0,
			count: 58,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sdcf5854c3d3944d4b87d3434bfcef319l.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf23771987dc64e9790ff04b2f1655fe4j.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S0a70f3134fe642819021808ace57b0b1K.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S40f3cb2d0a7c4f2bb434703b9f1a2bd9n.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S5af4256651a3488d925d5779e627c4fdv.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S963f25359d894873bdffc77c8d935490W.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S56d9e2d145c446f192e6a0c96ac1c4b79.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "Blue Suede Casual Sports",
		price: 85,
		description: "Step into comfort with these classic blue suede casual Sports. Featuring a stylish suede upper, durable rubber soles, and classic lace-up fronts, they're a versatile addition to any wardrobe.",
		category: "Fashion",
		image: "https://i.imgur.com/qNOjJje.jpeg",
		rating: {
			rate: 4.5,
			count: 72,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S01b51d59683f4632b78f75a88809c0b8m.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4c8fb6692ba44773972e7b25d51df199g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S63beea000bb2466587fde40c051e368be.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S56318bfa18de490b935ff58fc7a5a30eI.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S6da23e349d1b47c5bf78e8dcb47609c9a.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf2b1f1a393dc4d15af3bc9ba207110f5z.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se9233d1eec4341ae88f45fcf62a02cado.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		id: counter++,
		name: "Electric Bicycle",
		price: 1800,
		description: "This modern electric bicycle combines style and efficiency with a durable frame, enhanced battery life, and integrated tech. Perfect for eco-conscious commuters navigating the city with ease.",
		category: "Electronics",
		image: "https://i.imgur.com/BG8J0Fj.jpg",
		rating: {
			rate: 4.6,
			count: 88,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/A638ccc3ae7fa487a9c2346f1e68c837ee.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/A9eefdb8806ab47289d4bdba2ef26dc5dF.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/A957101b1298e4a9c923338934bc8c9329.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/A36caa4bd70444c4b8d4aee9ee6cc5b95h.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Acd11b142ccf1412d8c382f08cea69d49W.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Ac36baac21ffc43fcbd6b9d379bc4c234N.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		id: counter++,
		name: "All-Terrain Go-Kart",
		price: 450,
		description: "Experience outdoor thrills with this sleek all-terrain go-kart, featuring a durable frame, comfortable racing seat, and robust tires perfect for handling various terrains.",
		category: "Electronics",
		image: "https://i.imgur.com/BG8J0Fj.jpg",
		rating: {
			rate: 4.7,
			count: 95,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S758ea95a9aef4fda81d5bb2c7ed07c41m.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf805bf7b4e324e13bf7fc9ba6b564ce5M.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S66b135108d68401eb0d1045d346f59bbY.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sedaec576a91d4254b1770370bff5c21cT.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S1cf03319dc584e5eba5552b3ed77b594u.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sbf79eaaadaf64a2dbaa353a037a2c3d7r.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8cc33620b43246b28c541fd98611c7fcN.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		id: counter++,
		name: "Citrus Eau de Parfum",
		price: 65,
		description: "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle, it embodies freshness and elegance, leaving a lasting, zesty impression.",
		category: "Fashion",
		image: "https://i.imgur.com/BG8J0Fj.jpg",
		rating: {
			rate: 4.4,
			count: 70,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sad8ff9cba3cb4a6ba6e2850ad522453bk.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Scadb8d623059459c8fcdd86fe11f750fe.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S9d5638344ad845a089b1ffbdcc57d31bj.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8581dcbb1f1b478f9aa6e52b1f7e9f79j.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S3d578cfeaf9d4f6a9d14022b0500ac4aV.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sa3119fa3c6604421b64a19c8fe2aeb33D.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd8749f42a6e549b09848301ce5a4ed77e.jpg_960x960q75.jpg_.avif",
		],
	},
	{
		id: counter++,
		name: "New Cotton Shirt",
		price: 35,
		description: "A very nice and attractive cotton shirt, perfect for casual wear or dressing up.",
		category: "Fashion",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: 4.1,
			count: 65,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Se175b132bb734008ac7ea65e22c32cf8F.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Se86eeee842e7472eb29f0fa60631cab4T.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sc2567dde7fa140e9a61b0db0862a8709b.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb83a5d8cdefe478aa7a8d5666aa3c6a5p.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sdaac809037044fc4a6e2264e75e1542cv.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S4c27a4694f2a45c7901d34634cdb311cs.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sbece20952aa74da3bd1be4d179b1fde5U.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S77a2b517f1634484883d47c552fd546cA.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sd83be61c1145447baff46340f6d73bf4d.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		id: counter++,
		name: "Smartphone",
		price: 600,
		description: "A modern smartphone offering excellent performance and features for everyday communication and entertainment.",
		category: "Electronics",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: 4.5,
			count: 110,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S25ea935a26204c6690beea1a86879924f.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb23d26c535754a8c9fe094836557b9d58.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S7a85081592c6494cbf64e4e0fa08dad6y.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S9e0628ab73184968a096d0a723b77ba5e.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sff39afd4b9534558a1cbf76affaa0ca8J.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S85e40ddcdf8c475d8c7a544ef26e9df8G.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S75e8faa2439b46608326c83e1928f695s.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2abf878dc0cf4f1999a44e5600422c98M.png_960x960.png_.avif",
		],
	},
	{
		id: counter++,
		name: "Tash Sultana Stratocaster",
		price: 1400,
		description: "Inspired by Tash Sultana, this Fender Stratocaster is designed for explosive loop-based performances, gorgeous layered guitar parts, and jubilant leads.",
		category: "Fashion",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: 4.8,
			count: 85,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sbbcb115c1f3d4b8b9d3e37dd98797c39G.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S32365e6f6d194b2b9b2de7f6cf45f3a0j.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sb18d02511aef47ac8ffa9adae2e6d969A.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8bbfff66b595490abb0af28f63f58c6a1.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sfc45594a0af74b8496167c838b006a1fO.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S7ac8506188024733bb6e5b415f80d455I.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S60cab6ecb10b41fd972a65575b5e332dP.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S2363813fef534ca28fcad47d5553c335p.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S19776d5dfe544652b47618d318dcce3cY.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S6647b45111ce427c9072e99b517ea003i.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		id: counter++,
		name: "Player II Stratocaster HSS",
		price: 1050,
		description: "A classic guitar with modern features, the Player II Modified Stratocaster® HSS Floyd Rose® allows for extreme whammy bar use without going out of tune.",
		category: "Electronics",
		image: "https://placeimg.com/640/480/any",
		rating: {
			rate: 4.7,
			count: 78,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/Sbdabcfd585674dd39c0697eb5090bf3d7.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sa53a0eea103e4b85895f20af260034e4I.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S892b71f57cb04d759d83fa31a676b327T.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S51663d2161564072a5ae23f026460bafP.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S5f179fef1ab74d30a71bc32ad7ade75fa.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S889f4505e8b54241a5919bf5cd2a56acK.jpg_960x960q75.jpg_.avif",
		],
	},

	{
		id: counter++,
		name: "Wireless Earbuds",
		price: 180,
		description: "High-quality black wireless earbuds for immersive audio experience and convenient on-the-go listening.",
		category: "Electronics",
		image: "https://i.imgur.com/Qphac99.jpeg",
		rating: {
			rate: 4.6,
			count: 92,
		},
		secondaryImgs: [
			"https://ae-pic-a1.aliexpress-media.com/kf/S74167849dd6f439283e7c44c197adb73w.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sf1a15d69436a452eac725c52fe511c149.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S098cfa349ecf4e04b7266d901a62b040x.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S77eb361f5fbe49778aa123090380b36e1.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/S8bb1ba5d0450445d86aebf1d3f681235g.jpg_960x960q75.jpg_.avif",
			"https://ae-pic-a1.aliexpress-media.com/kf/Sdfe21653c81a4f10a51cf0c8c9db2068P.jpg_960x960q75.jpg_.avif",
		],
	},
];

products.forEach(async (prod: prod, ind) => {
	prod.image = prod.secondaryImgs[0];

	await addOneProduct(prod);
	if (ind == products.length-1) {console.log("done");};
});
