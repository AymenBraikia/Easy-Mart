"use client";
import styles from "./featured.module.css";
import Image from "next/image";
import { useEffect, useState, useContext, MouseEvent } from "react";
import { Product } from "../products/components/body";
import SettingsContext from "../settingsContext";
import { useRouter } from "next/navigation";

import AtcBtn from "../utils/atcBtn";
import AtwBtn from "../utils/atwBtn";

function star() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="rgb(250 204 21)" stroke="rgb(250 204 21)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 5 }}>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
	);
}

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

// function ProductComponent(info: product, index: number, settings: Settings, wishList: number[], cart: number[], updateWishList: (list: number[]) => void, updateCartList: (list: number[]) => void) {
// 	const isInWishList: boolean = wishList.find((e) => e == info.id) ? true : false;
// 	const isInCart: boolean = cart.find((e) => e == info.id) ? true : false;

// 	const router = useRouter();

// 	return (
// 		<div key={index} data-id={info.id} className={styles.product}>
// 			<div className={styles.productImg}>
// 				{AtwBtn(info, isInWishList, settings, updateWishList, wishList)}
// 				<Image
// 					onClick={(ev: MouseEvent) => {
// 						if ((ev.currentTarget as HTMLElement).classList.contains("atw")) return;

// 						router.push(`/product?id=${info.id}`);
// 					}}
// 					fill
// 					src={info.secondaryImgs[0]}
// 					alt="headphones"
// 				/>
// 			</div>

// 			<div className={styles.productInfo}>
// 				<div>
// 					<div className={styles.productName}>{info.name}</div>
// 					<div className={styles.rating}>
// 						{star()}
// 						{info.rating.rate}
// 						<span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 5, fontSize: 16 }}>({info.rating.count})</span>
// 					</div>
// 				</div>
// 				<div>
// 					<div className={styles.productPrice}>
// 						<div className={styles.new}>${info.price}</div>
// 						<div className={styles.old}>${(info.price + info.price * 0.3).toFixed(2)}</div>
// 					</div>
// 					{AtcBtn(info, isInCart, settings, updateCartList, cart)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

interface ProductComponentProps {
	info: product;
	index: number;
	settings: Settings;
	wishList: number[];
	cart: number[];
	updateWishList: (list: number[]) => void;
	updateCartList: (list: number[]) => void;
}

function ProductComponent({ info, index, settings, wishList, cart, updateWishList, updateCartList }: ProductComponentProps) {
	const isInWishList = wishList.includes(info.id);
	const isInCart = cart.includes(info.id);

	const router = useRouter();

	return (
		<div key={index} data-id={info.id} className={styles.product}>
			<div className={styles.productImg}>
				{AtwBtn(info, isInWishList, settings, updateWishList, wishList)}
				<Image
					onClick={(ev: MouseEvent) => {
						if ((ev.currentTarget as HTMLElement).classList.contains("atw")) return;
						router.push(`/product?id=${info.id}`);
					}}
					fill
					src={info.secondaryImgs[0]}
					alt="headphones"
				/>
			</div>
			<div className={styles.productInfo}>
				<div>
					<div className={styles.productName}>{info.name}</div>
					<div className={styles.rating}>
						{star()}
						{info.rating.rate}
						<span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 5, fontSize: 16 }}>({info.rating.count})</span>
					</div>
				</div>
				<div>
					<div className={styles.productPrice}>
						<div className={styles.new}>${info.price}</div>
						<div className={styles.old}>${(info.price + info.price * 0.3).toFixed(2)}</div>
					</div>
					{AtcBtn(info, isInCart, settings, updateCartList, cart)}
				</div>
			</div>
		</div>
	);
}

function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}
interface Settings {
	loaded: boolean;
	production: boolean;
	serverUrl: string;
}

function Featured() {
	const [products, setProducts] = useState<Product[]>([]);
	const [wishList, setWishList] = useState<number[]>([]);
	const [cartList, setCartList] = useState<number[]>([]);

	const settings = useContext(SettingsContext);
	const Router = useRouter();

	function updateWishList(newList: number[]) {
		setWishList(newList);
	}
	function updateCartList(newList: number[]) {
		setCartList(newList);
	}

	useEffect(() => {
		try {
			(async function () {
				const url = settings.production ? settings.serverUrl : "http://localhost:8000";

				const wish = JSON.parse(
					await (
						await fetch(url + "/wishList", {
							headers: {
								authorization: `Bearer ${getCookie("token")}`,
								idsOnly: "true",
							},
						})
					).json()
				);

				if (wish.success == false) {
					console.log("Error: could not get wishlist Data");

					setWishList([]);
					return;
				}

				setWishList(wish);

				const cart = JSON.parse(
					await (
						await fetch(url + "/cart", {
							headers: {
								authorization: `Bearer ${getCookie("token")}`,
								idsOnly: "true",
							},
						})
					).json()
				);

				if (cart.success == false) {
					console.log("Error: could not get cart Data");

					setCartList([]);
					return;
				}

				setCartList(cart);
			})();
		} catch {
			setWishList([]);
			setCartList([]);
		}
	}, []);

	// async function atcCheck(prod: Product) {
	// 	const isAlreadyIn = cartList.find((e: Product) => e.id == prod.id) ? true : false;

	// 	const atcBtn = document.querySelector(`[data-id="${prod.id}"] .atc`);

	// 	if (atcBtn)
	// 		if (isAlreadyIn) atcBtn.textContent = "Add to Cart";
	// 		else atcBtn.textContent = "Remove from Cart";

	// 	atc(settings, getCookie("token"), prod, isAlreadyIn);

	// 	const updatedCartList: Product[] = isAlreadyIn ? cartList.filter((e: Product) => e.id !== prod.id) : [...cartList, prod];

	// 	setCartList(updatedCartList);
	// 	localStorage.setItem("CartList", JSON.stringify(updatedCartList));

	// 	document.querySelector(".cart")?.setAttribute("data-len", updatedCartList.length.toString());
	// }

	// async function atwCheck(prod: Product) {
	// 	const isAlreadyIn = wishList.find((e: Product) => e.id == prod.id) ? true : false;

	// 	atw(settings, getCookie("token"), prod, isAlreadyIn);

	// 	const updatedWishList: Product[] = isAlreadyIn ? wishList.filter((e: Product) => e.id !== prod.id) : [...wishList, prod];

	// 	setWishList(updatedWishList);
	// 	localStorage.setItem("wishList", JSON.stringify(updatedWishList));

	// 	document.querySelector(".wish")?.setAttribute("data-len", updatedWishList.length.toString());
	// }

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
		<div className={styles.featuredContainer}>
			<h1 className={styles.featured}>Featured Products</h1>
			<div className={styles.featuredText}>
				<p style={{ fontSize: 18 }}>Handpicked items from our top-rated sellers</p>
				<div onClick={() => Router.push("/products")} className={styles.viewAll}>
					View All →
				</div>
			</div>
			<div className={styles.productsList}>
				{...products.map((el: product, index: number) => {
					return <ProductComponent key={index} info={el} index={index} settings={settings} wishList={wishList} cart={cartList} updateWishList={updateWishList} updateCartList={updateCartList} />;
				})}
			</div>
		</div>
	);
}

export default Featured;
