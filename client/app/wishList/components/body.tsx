"use client";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import styles from "./body.module.css";
import SettingsContext from "@/app/settingsContext";
import { useRouter } from "next/navigation";
import AtcBtn from "@/app/utils/atcBtn";
import AtwBtn from "@/app/utils/atwBtn";

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
	const [products, setProducts] = useState<productInterface[]>([]);
	const [cartList, setCartList] = useState<number[]>([]);

	const settings = useContext(SettingsContext);
	const router = useRouter();

	useEffect(() => {
		try {
			(async function () {
				const url = settings.production ? settings.serverUrl : "http://localhost:8000";

				const wish = JSON.parse(
					await (
						await fetch(url + "/wishList", {
							headers: {
								authorization: `Bearer ${getCookie("token")}`,
							},
						})
					).json()
				);

				if (wish.success == false) return console.log("Error: could not get wishlist Data");

				setProducts(wish);

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

				if (cart.success == false) return console.log("Error: could not get cart Data");

				setCartList(cart);
			})();
		} catch {
			setProducts([]);
			setCartList([]);
		}
	}, []);

	function updateWishList(newList: number[]) {
		setProducts(products.filter((e) => newList.includes(e.id)));
	}
	function updateCartList(newList: number[]) {
		setCartList(newList);
	}

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
										{AtwBtn(
											prod,
											true,
											settings,
											updateWishList,
											products.map((e) => e.id)
										)}
										<Image onClick={() => router.push(`/product?id=${prod.id}`)} fill src={prod.secondaryImgs[0]} alt={prod.name} />
									</div>
									<div className={styles.prodInfo}>
										<h3>{prod.name}</h3>
										<div className={styles.price}>
											<h3 className={styles.new}>${prod.price}</h3>
											<div className={styles.old}>${(prod.price + prod.price * 0.3).toFixed(2)}</div>
										</div>

										{AtcBtn(prod, cartList.includes(prod.id), settings, updateCartList, cartList)}
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
