import { Product } from "../products/components/body";
import atc from "./atcAction";
import { MouseEvent } from "react";

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

interface Settings {
	loaded: boolean;
	production: boolean;
	serverUrl: string;
}

function AtcBtn(product: Product, isAlreadyIn: boolean, settings: Settings, next: (newList: number[]) => void, oldCartList: number[]) {
	function handleAdd(e: MouseEvent<HTMLElement>) {
		const token = getCookie("token");

		if (token) atc(settings, getCookie("token"), product, isAlreadyIn);
		else {
			location.pathname = "/signup";
			return;
		}

		if (isAlreadyIn) {
			e.currentTarget.classList.remove("active");
			next(oldCartList.filter((e) => e !== product.id));
		} else {
			e.currentTarget.classList.add("active");
			next([...oldCartList, product.id]);
		}
	}

	return (
		<div onClick={handleAdd} className={"addToCartBtn"}>
			{cart()} {isAlreadyIn ? "Remove from Cart" : "Add to Cart"}
		</div>
	);
}

export default AtcBtn;
