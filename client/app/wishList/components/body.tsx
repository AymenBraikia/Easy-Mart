"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./body.module.css";

interface productInterface {
	name: string;
	description: string;
	image: string;
	secondaryImgs: string[];
	rating: { rate: number; count: number };
	price: number;
	id: number;
	category: string;
}

function heart() {
	return (
		<svg className={styles.heart} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
		</svg>
	);
}

function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}

function Body() {
	const [products, setProducts] = useState([]);
	const [settings, setSettings] = useState({ serverUrl: "", loaded: false, production: null });

	async function fetchSettings() {
		if (settings.loaded) return;

		const newSettings = await (await fetch("/settings.json")).json();
		setSettings(newSettings);
	}

	fetchSettings();

	async function atc(prod: productInterface) {
		fetch(settings.production ? settings.serverUrl : "http://localhost:8000" + "/atc", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: prod.id, username: getCookie("username") }),
		});
	}

	useEffect(() => {
		if (!getCookie("username")) location.pathname = "";

		if (!settings.loaded) return;

		(async () => {
			const products = JSON.parse(await (await fetch(settings.production ? settings.serverUrl : "http://localhost:8000" + "/cart?username=" + getCookie("username"))).json());

			setProducts(products.cart);
		})();
	}, [settings.loaded]);

	return (
		<div className={styles.container}>
			{products.length ? (
				<div className={styles.content}>
					<h1 className={styles.contentTitle}>My Wishlist</h1>
					<div className={styles.products}>
						{...products.map((prod: productInterface) => {
							return (
								<div key={prod.id} className={styles.product}>
									<div className={styles.prodImg}>
										<Image fill src={prod.secondaryImgs[0]} alt={prod.name} />
									</div>
									<div className={styles.prodInfo}>
										<div className={styles.name}>{prod.name}</div>
										<div className={styles.price}>
											<div className={styles.old}>${prod.price}</div>
											<div className={styles.new}>${(prod.price + prod.price * 0.3).toFixed(2)}</div>
										</div>
										<div
											onClick={() => {
												if (getCookie("username")) atc(prod);
												else location.pathname = "/signup";
											}}
											className={styles.atc}
										>
											Add to Cart
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<div className={styles.empty}>
					{heart()}
					<h1>Your wishlist is empty</h1>
					<p>
						Save items you love to your wishlist and find them here <br /> anytime.
					</p>
					<button className={styles.shoppingBtn}>Continue Shopping</button>
				</div>
			)}
		</div>
	);
}

export default Body;
