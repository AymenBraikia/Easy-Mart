"use client";
import { useEffect, useState, MouseEvent, useRef, useContext } from "react";
import Image from "next/image";
import styles from "./body.module.css";
import SettingsContext from "@/app/settingsContext";
import {useRouter} from "next/navigation";

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

function cart() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-4 h-4">
			<circle cx="8" cy="21" r="1"></circle>
			<circle cx="19" cy="21" r="1"></circle>
			<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
		</svg>
	);
}

function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}

function Body() {
	const [products, setProducts] = useState([]);

	const atcBtn = useRef<HTMLDivElement>(null);

	const settings = useContext(SettingsContext);
	const router = useRouter();

	async function atc(prod: productInterface) {
		fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + "/atc", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${getCookie("token")}`,
			},
			body: JSON.stringify({ id: prod.id, username: getCookie("username") }),
		});
	}

	useEffect(() => {
		if (!getCookie("username")) router.push("/signin");

		const data = localStorage.getItem("wishList");

		if (!data) return;

		const prods = JSON.parse(data);

		if (!prods.length) return;

		setProducts(prods);

		let total = 0;

		prods.forEach((e: productInterface) => (total += e.price));
	}, [settings.loaded]);

	return (
		<div className={styles.container}>
			{products.length ? (
				<div className={styles.content}>
					<h1 className={styles.contentTitle}>My Wishlist</h1>
					<div className={styles.products}>
						{...products.map((prod: productInterface) => {
							return (
								<div
									key={prod.id}
									onClick={(ev: MouseEvent) => {
										if ((ev.target as HTMLElement).textContent?.trim() == "Add to Cart") return;

										location.href = `/product?id=${prod.id}`;
										// router.push(`/product?${params.toString()}`);
									}}
									className={styles.product}
								>
									<div className={styles.prodImg}>
										<Image fill src={prod.secondaryImgs[0]} alt={prod.name} />
									</div>
									<div className={styles.prodInfo}>
										<h3>{prod.name}</h3>
										<div className={styles.price}>
											<h3 className={styles.new}>${prod.price}</h3>
											<div className={styles.old}>${(prod.price + prod.price * 0.3).toFixed(2)}</div>
										</div>
										<div
											ref={atcBtn}
											onClick={() => {
												if (getCookie("username")) atc(prod);
												else router.push("/signup");
											}}
											className={styles.atc}
										>
											{cart()} Add to Cart
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
					<button onClick={() => router.push("/products")} className={styles.shoppingBtn}>
						Continue Shopping
					</button>
				</div>
			)}
		</div>
	);
}

export default Body;
