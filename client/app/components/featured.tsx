"use client";
import "./featured.css";
import Image from "next/image";
import { useEffect, useState, MouseEvent } from "react";
import { getCookie, Product } from "../products/components/body";

function heart() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-4 h-4">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
		</svg>
	);
}

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

// interface product {
// 	name: string;
// 	imgSrc: StaticImageData;
// 	ratingCount: string;
// 	rating: string;
// 	priceNew: number;
// 	priceOld: number;
// }

// const products: product[] = [
// 	{
// 		name: "Wireless Bluetooth Headphones",
// 		imgSrc: headPhones,
// 		ratingCount: "142",
// 		rating: "4.5",
// 		priceNew: 89.99,
// 		priceOld: 129.99,
// 	},
// 	{
// 		name: "Smart Fitness Watch",
// 		imgSrc: smartWatch,
// 		ratingCount: "324",
// 		rating: "4.8",
// 		priceNew: 89.99,
// 		priceOld: 129.99,
// 	},
// 	{
// 		name: "Organic Cotton T-Shirt",
// 		imgSrc: tShirt,
// 		ratingCount: "156",
// 		rating: "4.6",
// 		priceNew: 24.99,
// 		priceOld: 34.99,
// 	},
// 	{
// 		name: "Professional Camera Lens",
// 		imgSrc: cameraLens,
// 		ratingCount: "89",
// 		rating: "4.9",
// 		priceNew: 499.99,
// 		priceOld: 599.99,
// 	},
// 	{
// 		name: "Artisan Coffee Beans",
// 		imgSrc: coffee,
// 		ratingCount: "67",
// 		rating: "4.7",
// 		priceNew: 18.99,
// 		priceOld: 24.99,
// 	},
// 	{
// 		name: "Minimalist Desk Lamp",
// 		imgSrc: deskLamp,
// 		ratingCount: "203",
// 		rating: "4.8",
// 		priceNew: 79.99,
// 		priceOld: 99.99,
// 	},
// ];

interface product {
	name: string;
	description: string;
	image: string;
	secondaryImgs: string[];
	rating: { rate: number; count: number };
	price: number;
	id: number;
	category: string;
}
function productComponent(info: product, index: number, atc: (prod: product) => void, atw: (prod: product) => void, wishList: product[], cart: product[]) {
	const isInWishList = wishList.find((e) => e.id == info.id);
	const isInCart = cart.find((e) => e.id == info.id);

	return (
		<div key={index} data-id={info.id} className="product">
			<div className="productImg">
				<div
					data-wish={info.id}
					className={`atw ${isInWishList ? "active" : ""}`}
					onClick={() => {
						atw(info);
						document.querySelector(`[data-wish="${info.id}"]`)?.classList.toggle("active");
					}}
				>
					{heart()}
				</div>
				<Image
					onClick={(ev: MouseEvent) => {
						if ((ev.currentTarget as HTMLElement).classList.contains("atw")) return;

						location.href = `/product?id=${info.id}`;
						// router.push(`/product?${params.toString()}`);
					}}
					fill
					src={info.secondaryImgs[0]}
					alt="headphones"
				/>
			</div>

			<div className="productInfo">
				<div>
					<div className="productName">{info.name}</div>
					<div className="rating">
						{star()}
						{info.rating.rate}
						<span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 5, fontSize: 16 }}>({info.rating.count})</span>
					</div>
				</div>
				<div>
					<div className="productPrice">
						<div className="new">${info.price}</div>
						<div className="old">${(info.price + info.price * 0.3).toFixed(2)}</div>
					</div>
					<div onClick={() => (getCookie("username") ? atc(info) : (location.pathname = "/signup"))} className={"atc btn br"}>
						{isInCart ? "Remove from Cart" : "Add to Cart"}
					</div>
				</div>
			</div>
		</div>
	);
}

function Featured() {
	const [products, setProducts] = useState<Product[]>([]);
	const [settings, setSettings] = useState({ loaded: false, production: false, serverUrl: "" });
	const [wishList, setWishList] = useState<Product[]>([]);
	const [cartList, setCartList] = useState<Product[]>([]);

	// fetch settings.json file to get the server url (localhost for dev)
	useEffect(() => {
		async function fetchSettings() {
			if (settings.loaded) return;

			const newSettings = await (await fetch("/settings.json")).json();
			setSettings(newSettings);
		}

		fetchSettings();
	});

	useEffect(() => {
		const wish = localStorage.getItem("wishList");

		if (wish) setWishList(JSON.parse(wish));

		const cart = localStorage.getItem("CartList");

		if (cart) setCartList(JSON.parse(cart));
	}, []);

	async function atc(prod: Product) {
		const isAlreadyIn = cartList.find((e: Product) => e.id == prod.id);

		const atcBtn = document.querySelector(`[data-id="${prod.id}"] .atc`);

		if (atcBtn)
			if (isAlreadyIn) atcBtn.textContent = "Add to Cart";
			else atcBtn.textContent = "Remove from Cart";

		fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + (isAlreadyIn ? "/removeCart" : "/atc"), {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: prod.id, username: getCookie("username") }),
		});

		const updatedCartList: Product[] = isAlreadyIn ? cartList.filter((e: Product) => e.id !== prod.id) : [...cartList, prod];

		setCartList(updatedCartList);
		localStorage.setItem("CartList", JSON.stringify(updatedCartList));

		document.querySelector(".cart")?.setAttribute("data-len", updatedCartList.length.toString());
	}

	async function atw(prod: Product) {
		const isAlreadyIn = wishList.find((e: Product) => e.id == prod.id);

		fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + (isAlreadyIn ? "/removeWishList" : "/atw"), {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: prod.id, username: getCookie("username") }),
		});

		const updatedWishList: Product[] = isAlreadyIn ? wishList.filter((e: Product) => e.id !== prod.id) : [...wishList, prod];

		setWishList(updatedWishList);
		localStorage.setItem("wishList", JSON.stringify(updatedWishList));

		document.querySelector(".wish")?.setAttribute("data-len", updatedWishList.length.toString());
	}

	// gets products data
	useEffect(() => {
		if (!settings.loaded || products.length) return;

		const url = settings.production ? settings.serverUrl : "http://localhost:8000";

		fetch(url + "/products")
			.then((resp) => resp.json())
			.then((data) => JSON.parse(data))
			.then((results: Product[]) => {
				setProducts(results.filter((e) => [2, 3, 7, 10, 17, 19].includes(e.id)));
			})
			.catch((err) => console.error("Failed to load products:", err));
	}, [products, settings]);
	return (
		<div className="featuredContainer">
			<h1 className="featured">Featured Products</h1>
			<div className="featuredText">
				<p style={{ fontSize: 18 }}>Handpicked items from our top-rated sellers</p>
				<div onClick={() => (location.pathname = "/products")} className="btn viewAll">
					View All →
				</div>
			</div>
			<div className="productsList">
				{...products.map((el: product, index: number) => {
					return productComponent(el, index, atc, atw, wishList, cartList);
				})}
			</div>
		</div>
	);
}

export default Featured;
