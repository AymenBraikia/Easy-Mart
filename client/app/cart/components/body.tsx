"use client";
import { useEffect, useState, MouseEvent } from "react";
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

function cart() {
	return (
		<svg className={styles.cart} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
function bin() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M3 6h18"></path>
			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
			<line x1="10" x2="10" y1="11" y2="17"></line>
			<line x1="14" x2="14" y1="11" y2="17"></line>
		</svg>
	);
}

function Body() {
	const [totalPrice, setTotalPrice] = useState(0);
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
			const prods = JSON.parse(await (await fetch(settings.production ? settings.serverUrl : "http://localhost:8000" + "/cart?username=" + getCookie("username"))).json());

			setProducts(prods.cart);

			let total = 0;

			prods.cart.forEach((e: productInterface) => (total += e.price));

			setTotalPrice(total);
		})();
	}, [settings.loaded]);

	function remove(click: MouseEvent) {
		const id = Number(click.currentTarget.getAttribute("data-id"));

		if (!id) return;

		setProducts(products.filter((e: productInterface) => e.id !== id));

		fetch(settings.production ? settings.serverUrl : "http://localhost:8000" + "/removeCart", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: getCookie("username"), id: id }),
		});
	}

	return (
		<div className={styles.container}>
			{products.length ? (
				<div className={styles.content}>
					<h1 className={styles.contentTitle}>Shopping Cart</h1>
					<div className={styles.container2}>
						<div className={styles.wrapper}>
							<div className={styles.details}>
								<div className={styles.detail}>Product</div>
								<div className={styles.detail}>Price</div>
								<div className={styles.detail}>Quantity</div>
								<div className={styles.detail}>Total</div>
							</div>
							<div className={styles.products}>
								{...products.map((prod: productInterface) => {
									return (
										<div key={prod.id} data-id={prod.id} className={styles.product}>
											<div className={styles.prodImg}>
												<Image fill src={prod.secondaryImgs[0]} alt={prod.name} />
											</div>

											<div className={styles.prodInfo}>
												<div className={styles.name}>
													<h3>{prod.name}</h3>
													<div onClick={(e: MouseEvent) => remove(e)} data-id={prod.id} className={styles.remove}>
														{bin()} Remove
													</div>
												</div>

												<div className={styles.price}>
													<h3 className={styles.new}>${prod.price}</h3>
													<div className={styles.old}>${(prod.price + prod.price * 0.3).toFixed(2)}</div>
												</div>

												<div className={styles.quantity}>
													<div className={styles.quantityBtn}>-</div>
													<div className={styles.quantityVal}>1</div>
													<div className={styles.quantityBtn}>+</div>
												</div>

												<div className={styles.total}>${prod.price}</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className={styles.summary}>
							<h3>Order Summary</h3>
							<div className={styles.summarySubTitle}>
								<p className={styles.subTitle}>Subtotal</p>
								<p>${totalPrice}</p>
							</div>
							<div className={styles.summarySubTitle}>
								<p className={styles.subTitle}>Shipping</p>
								<p>Free</p>
							</div>
							<div className={styles.summarySubTitle}>
								<p className={styles.subTitle}>Tax</p>
								<p>Calculated at Checkout</p>
							</div>
							<hr className={styles.hr} />
							<div className={styles.summarySubTitle}>
								<h3>Total</h3>
								<p>${totalPrice}</p>
							</div>
							<div className={styles.checkout}>Proceed to Checkout</div>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.empty}>
					{cart()}
					<h1>Your cart is empty</h1>
					<p>Looks like you haven&apos;t added any products to your cart yet.</p>
					<button onClick={() => (location.pathname = "/products")} className={styles.shoppingBtn}>
						Continue Shopping
					</button>
				</div>
			)}
		</div>
	);
}

export default Body;
