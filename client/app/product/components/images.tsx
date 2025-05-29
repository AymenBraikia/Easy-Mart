"use client";
import "./images.css";
import Image from "next/image";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { useSearchParams } from "next/navigation";

interface product {
	name: string;
	description: string;
	category: string;
	image: string;
	secondaryImgs: string[];
	ratingCount: string;
	rating: { rate: string; count: number };
	price: number;
	id: number;
}

function truck() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="perkIcon lucide lucide-truck h-6 w-6 text-green-600 mx-auto mb-2"
		>
			<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
			<path d="M15 18H9"></path>
			<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
			<circle cx="17" cy="18" r="2"></circle>
			<circle cx="7" cy="18" r="2"></circle>
		</svg>
	);
}
function shield() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="perkIcon lucide lucide-shield h-6 w-6 text-green-600 mx-auto mb-2"
		>
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
		</svg>
	);
}
function returns() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="perkIcon lucide lucide-rotate-ccw h-6 w-6 text-green-600 mx-auto mb-2"
		>
			<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
			<path d="M3 3v5h5"></path>
		</svg>
	);
}

function swipe(amount: number) {
	const container = document.querySelector(".imgs");
	if (!container) return;
	container?.scrollTo(container.scrollLeft + amount, 0);
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
function heart() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-4 h-4">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
		</svg>
	);
}
function next() {
	return (
		<svg onClick={() => swipe(215)} className="next" fill="currentColor" height="40px" width="40px" version="1.1" id="XMLID_287_" viewBox="0 0 24 24">
			<g id="next">
				<g>
					<polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
				</g>
			</g>
		</svg>
	);
}
function prev() {
	return (
		<svg onClick={() => swipe(-215)} className="prev" style={{ transform: "rotate(180deg)" }} fill="currentColor" height="40px" width="40px" version="1.1" id="XMLID_287_" viewBox="0 0 24 24">
			<g id="next">
				<g>
					<polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
				</g>
			</g>
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

function Images() {
	const filterList = useRef<HTMLDivElement>(null);
	const selectBtn = useRef<HTMLButtonElement>(null);

	const mainImg = useRef<HTMLImageElement>(null);
	const id = useSearchParams().get("id");

	const [mainUrl, setMainUrl] = useState("");
	const [product, setProduct] = useState<product>();
	const [imgsUrls, setImgsUrls] = useState([""]);
	const [settings, setSettings] = useState({ serverUrl: "", loaded: false, production: null });

	async function fetchSettings() {
		if (settings.loaded) return;

		const newSettings = await (await fetch("/settings.json")).json();
		setSettings(newSettings);
	}

	fetchSettings();

	useEffect(() => {
		(async function () {
			if (!settings.loaded) return;

			fetch(settings.production ? settings.serverUrl : "http://localhost:8000" + "/singleProduct" + "?id=" + id)
				.then((e) => e.json())
				.then((data) => JSON.parse(data))
				.then((results) => {
					console.log(results);

					setProduct(results);
					setImgsUrls(results.secondaryImgs);
				});
		})();
	}, [id, settings.loaded, settings.production, settings.serverUrl]);

	function handleFilterClick() {
		if (!filterList.current) return;

		filterList.current.classList.toggle("block");

		setTimeout(() => filterList.current?.classList.toggle("active"), 1);
	}

	function select(ev: MouseEvent) {
		if (!filterList.current || !selectBtn.current || !ev.currentTarget.textContent) return;

		filterList.current.classList.toggle("active");

		selectBtn.current.innerHTML = ev.currentTarget.textContent;

		// setSorting(ev.currentTarget.textContent);

		setTimeout(() => filterList.current?.classList.remove("block"), 300);
	}

	return imgsUrls[0] && product ? (
		<div className="Container">
			<div className="imgsContainer">
				<div className="main">
					<Image ref={mainImg} fill src={mainUrl || imgsUrls[0]} alt="Product Image" />
				</div>
				<div className="secondary">
					{next()}
					{prev()}
					<div className="imgs">
						{imgsUrls.map((url, index) => {
							return (
								<Image
									onClick={(e) => {
										setMainUrl(url);
										document.querySelectorAll(".secondary>div>*").forEach((e) => e.classList.remove("active"));
										e.currentTarget.classList.add("active");
									}}
									key={index}
									width={100}
									height={100}
									src={url}
									alt="Product Image"
								/>
							);
						})}
					</div>
				</div>
			</div>

			<div className="productInfo">
				<h1 className="productName">{product.name}</h1>
				<h3 className="rating">
					{star()} {product.rating.rate} {`(${product.rating.count})`}
				</h3>
				<h1 className="price">
					${product.price}
					<div style={{ textDecoration: "line-through", color: "var(--foreground4)", fontSize: 25, fontWeight: 300 }}>${(product.price + product.price * 0.3).toFixed(2)}</div>
				</h1>

				<p>{product.description}</p>
				<h3 style={{ margin: 0, color: "var(--foreground4)", fontWeight: 500 }}>Quantity</h3>
				<div style={{ position: "relative" }}>
					<button ref={selectBtn} onClick={handleFilterClick} className="btn filter">
						1
					</button>
					<div ref={filterList} className="filtersList">
						<div onClick={(ev: MouseEvent) => select(ev)}>1</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>2</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>3</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>4</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>5</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>6</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>7</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>8</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>9</div>
						<div onClick={(ev: MouseEvent) => select(ev)}>10</div>
					</div>
				</div>
				<div className="buttons">
					<div className="btn atc">{cart()}Add to Cart</div>
					<div className="btn wishList">{heart()}Wishlist</div>
					<div className="btn buy">Buy Now</div>
				</div>
				<hr />
				<div className="perks">
					<div className="perk">
						Free Shipping
						{truck()}
					</div>
					<div className="perk">
						Secure Payment
						{shield()}
					</div>
					<div className="perk">
						Easy Returns
						{returns()}
					</div>
				</div>
			</div>
		</div>
	) : (
		<h1>Loading...</h1>
	);
}

export default Images;
