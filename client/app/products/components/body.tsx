"use client";

import "./body.css";

import Nav from "./nav";
import Image from "next/image";
import { useState, useEffect, useRef, MouseEvent, useMemo, useContext } from "react";
import "./productSettings.css";
import "./productsList.css";
import SettingsContext from "@/app/settingsContext";
import { useRouter } from "next/navigation";
import AtcBtn from "@/app/utils/atcBtn";
import AtwBtn from "@/app/utils/atwBtn";
// import atc from "@/app/utils/atcAction";

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
function grid() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gridIcon active lucide lucide-grid3x3 h-4 w-4">
			<rect width="18" height="18" x="3" y="3" rx="2"></rect>
			<path d="M3 9h18"></path>
			<path d="M3 15h18"></path>
			<path d="M9 3v18"></path>
			<path d="M15 3v18"></path>
		</svg>
	);
}

function list() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="listIcon lucide lucide-list h-4 w-4">
			<line x1="8" x2="21" y1="6" y2="6"></line>
			<line x1="8" x2="21" y1="12" y2="12"></line>
			<line x1="8" x2="21" y1="18" y2="18"></line>
			<line x1="3" x2="3.01" y1="6" y2="6"></line>
			<line x1="3" x2="3.01" y1="12" y2="12"></line>
			<line x1="3" x2="3.01" y1="18" y2="18"></line>
		</svg>
	);
}

export interface Product {
	name: string;
	description: string;
	image: string;
	secondaryImgs: string[];
	rating: { rate: number; count: number };
	price: number;
	id: number;
	category: string;
}

function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}

function Body() {
	const [wishList, setWishList] = useState<number[]>([]);
	const [cartList, setCartList] = useState<number[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [sorting, setSorting] = useState("Featured");
	const [displayStyle, setdisplayStyle] = useState("grid");

	const filterList = useRef<HTMLDivElement>(null);
	const selectBtn = useRef<HTMLButtonElement>(null);

	const router = useRouter();

	const settings = useContext(SettingsContext);

	function updateWishList(newList: number[]) {
		setWishList(newList);
	}
	function updateCartList(newList: number[]) {
		setCartList(newList);
	}

	function handleDisplayClick(ev: MouseEvent) {
		document.querySelector(".gridIcon")?.parentElement?.classList.remove("active");
		document.querySelector(".listIcon")?.parentElement?.classList.remove("active");

		setdisplayStyle(ev.currentTarget.getAttribute("data-displaystyle") || "grid");

		ev.currentTarget.classList.add("active");
	}

	function handleFilterClick() {
		if (!filterList.current) return;

		filterList.current.classList.toggle("block");

		setTimeout(() => filterList.current?.classList.toggle("active"), 1);
	}

	function select(ev: MouseEvent) {
		if (!filterList.current || !selectBtn.current || !ev.currentTarget.textContent) return;

		filterList.current.classList.toggle("active");

		selectBtn.current.innerHTML = ev.currentTarget.textContent;

		setSorting(ev.currentTarget.textContent);

		setTimeout(() => filterList.current?.classList.remove("block"), 300);
	}

	// gets products data
	useEffect(() => {
		if (!settings.loaded || products.length) return;

		const url = settings.production ? settings.serverUrl : "http://localhost:8000";

		fetch(url + "/products", { headers: { authorization: `Bearer ${getCookie("token")}` } })
			.then((resp) => resp.json())
			.then((data) => JSON.parse(data))
			.then((results: Product[]) => {
				setProducts(results);
			})
			.catch((err) => console.error("Failed to load products:", err));
	}, [products, settings]);

	useEffect(() => {
		switch (displayStyle) {
			case "grid":
				document.querySelectorAll(".productItem").forEach((e) => e.classList.remove("list"));
				break;
			case "list":
				document.querySelectorAll(".productItem").forEach((e) => e.classList.add("list"));

				break;

			default:
				break;
		}
	}, [displayStyle]);

	const sortedProducts = useMemo(() => {
		const sorted = [...products];

		switch (sorting.toLowerCase()) {
			case "low to high price":
				return sorted.sort((a, b) => a.price - b.price);

			case "high to low price":
				return sorted.sort((a, b) => b.price - a.price);

			case "highest rated":
				return sorted.sort((a, b) => b.rating.rate - a.rating.rate);

			default:
				return sorted;
		}
	}, [products, sorting]);
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

				if (wish.success == false) return console.log("Error: could not get wishlist Data");

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

				if (cart.success == false) return console.log("Error: could not get cart Data");

				setCartList(cart);
			})();
		} catch {
			setWishList([]);
			setCartList([]);
		}
	}, []);

	return (
		<div className="body">
			<div className="title">
				<h1>All Products</h1>
				<p>Discover amazing products from trusted sellers</p>
			</div>
			{settings.loaded && products.length ? (
				<div
					className="sortingContainer"
					style={{ width: "100%", height: 80, borderRadius: 15, border: "2px solid var(--background4)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 50px", backgroundColor: "var(--background)" }}
				>
					<div className="count">{products.length} products found</div>
					<div className="display">
						<div style={{ position: "relative" }}>
							<button ref={selectBtn} onClick={handleFilterClick} className="btn filter">
								Featured
							</button>
							<div ref={filterList} className="filtersList">
								<div onClick={(ev: MouseEvent) => select(ev)}>Featured</div>
								<div onClick={(ev: MouseEvent) => select(ev)}>Low to High Price</div>
								<div onClick={(ev: MouseEvent) => select(ev)}>High to Low Price</div>
								<div onClick={(ev: MouseEvent) => select(ev)}>Highest Ratted</div>
								<div onClick={(ev: MouseEvent) => select(ev)}>Newest</div>
							</div>
						</div>

						<div className="displayStyle">
							<div data-displaystyle={"grid"} className="active" onClick={handleDisplayClick}>
								{grid()}
							</div>
							<div data-displaystyle={"list"} onClick={handleDisplayClick}>
								{list()}
							</div>
						</div>
					</div>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
			<div className="contentWrapper" style={{ display: "flex", justifyContent: "center", gap: 50, width: "100vw", padding: "0 50px" }}>
				<Nav />
				<div className="productsContainer">
					{sortedProducts.map((product) => (
						<div key={product.id} data-price={product.price} data-rating={product.rating.rate} data-category={product.category} className="productItem">
							<div className="imgWrapper">
								{AtwBtn(product, wishList.includes(product.id), settings, updateWishList, wishList)}
								<Image
									onClick={(ev: MouseEvent) => {
										if ((ev.target as HTMLElement).classList.contains("addToWishBtn")) return;

										router.push(`/product?id=${product.id}`);
									}}
									fill
									src={product.secondaryImgs[0]}
									alt={product.name}
								/>
							</div>
							<div className="productInfo">
								<h3>{product.name}</h3>
								<h4>
									{star()}
									{product.rating.rate}
									<span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 5, fontSize: 16 }}>{`(${product.rating.count})`}</span>
								</h4>
								<div className="productPrice">
									<div className="new">${product.price}</div>
									<div className="old">${(product.price + product.price + product.price * 0.3).toFixed(2)}</div>
								</div>

								{AtcBtn(product, cartList.includes(product.id), settings, updateCartList, cartList)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Body;
