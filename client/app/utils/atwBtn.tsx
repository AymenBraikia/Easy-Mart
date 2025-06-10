import { MouseEvent } from "react";
import { Product } from "../products/components/body";
import atw from "./atwAction";

function heart() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
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

function AtcBtn(product: Product, isAlreadyIn: boolean, settings: Settings, next: (newList: number[]) => void) {
	function handleAdd(e: MouseEvent<HTMLElement>) {
		const token = getCookie("token");

		if (token) atw(settings, getCookie("token"), product, isAlreadyIn);
		else location.pathname = "/signup";

		const oldWishList: number[] = JSON.parse(localStorage.getItem("cartList") || "[]") || [];

		if (isAlreadyIn) {
			e.currentTarget.classList.remove("active");
			next(oldWishList.filter((e) => e !== product.id));
		} else {
			e.currentTarget.classList.add("active");
			next([...oldWishList, product.id]);
		}
	}

	return (
		<div onClick={handleAdd} className={`addToWishBtn ${isAlreadyIn ? "active" : ""}`}>
			{heart()}
		</div>
	);
}

export default AtcBtn;
