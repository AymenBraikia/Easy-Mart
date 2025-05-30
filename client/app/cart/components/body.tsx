"use client";
import { useEffect, useState } from "react";
import styles from "./body.module.css";

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

	useEffect(() => {
		if (!getCookie("username")) location.pathname = "";

		if (!settings.loaded) return;

		(async () => {
			const products = JSON.parse(await (await fetch(settings.production ? settings.serverUrl : "http://localhost:8000" + "/cart?user=" + getCookie("username"))).json());
			
			setProducts(products)
		
		})();
	}, [products, settings.loaded, settings.production, settings.serverUrl]);

	return (
		<div className={styles.container}>
			<div className={styles.empty}>
				{heart()}
				<h1>Your wishlist is empty</h1>
				<p>
					Save items you love to your wishlist and find them here <br /> anytime.
				</p>
				<button className={styles.shoppingBtn}>Continue Shopping</button>
			</div>
		</div>
	);
}

export default Body;
