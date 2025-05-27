import "./featured.css";
import { StaticImageData } from "next/image";
import headPhones from "../../public/headphones.png";
import smartWatch from "../../public/smartWatch.png";
import tShirt from "../../public/t-shirt.png";
import cameraLens from "../../public/cameraLens.png";
import coffee from "../../public/coffee-beans.png";
import deskLamp from "../../public/minimalist-desk-lamp.png";
import Image from "next/image";

function star() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="rgb(250 204 21)"
			stroke="rgb(250 204 21)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			style={{ marginRight: 5 }}
			className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400"
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
	);
}

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

function product(info: product, index: number) {
	return (
		<div key={index} className="product">
			<Image src={info.imgSrc} alt="headphones" className="productImg" />

			<div className="productInfo">
				<div>
					<div className="productName">{info.name}</div>
					<div className="rating">
						{star()}
						{info.rating}
						<span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 5, fontSize: 16 }}>({info.ratingCount})</span>
					</div>
				</div>
				<div>
					<div className="productPrice">
						<div className="new">${info.priceNew}</div>
						<div className="old">${info.priceOld}</div>
					</div>
					<div className="atc btn br">Add to Cart</div>
				</div>
			</div>
		</div>
	);
}

function Featured() {
	return (
		<div className="featuredContainer">
			<h1 className="featured">Featured Products</h1>
			<div className="">
				<p style={{ fontSize: 18 }}>Handpicked items from our top-rated sellers</p>
				<div className="btn viewAll">View All →</div>
			</div>
			<div className="productsList">
				{...products.map((el: product, index: number) => {
					return product(el, index);
				})}
			</div>
		</div>
	);
}

export default Featured;
