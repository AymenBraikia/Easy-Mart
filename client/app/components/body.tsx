"use client";
import Introduction from "./introduction";
// import Perks from "./perks";
// import ShopCat from "./shopCat";
// import Featured from "./featured";
// import TopSellers from "./topSellers";
// import Achievement from "./achievements";
// import Subscribe from "./subscribe";
// import Footer from "./footer";

import dynamic from "next/dynamic";

const Perks = dynamic(() => import("./perks"), {
	loading: () => <h1>Loading...</h1>,
	ssr: true,
});

const ShopCat = dynamic(() => import("./shopCat"), {
	loading: () => <h1>Loading...</h1>,
	ssr: true,
});

const Featured = dynamic(() => import("./featured"), {
	loading: () => <h1>Loading...</h1>,
	ssr: true,
});

const TopSellers = dynamic(() => import("./topSellers"), {
	loading: () => <h1>Loading...</h1>,
	ssr: true,
});

const Achievement = dynamic(() => import("./achievements"), {
	loading: () => <h1>Loading...</h1>,
	ssr: true,
});

const Subscribe = dynamic(() => import("./subscribe"), {
	loading: () => <h1>Loading...</h1>,
	ssr: true,
});

const Footer = dynamic(() => import("./footer"), {
	loading: () => <h1>Loading...</h1>,
	ssr: true,
});

function body() {
	return (
		<div style={{ position: "absolute", top: "80px", left: "0", height: "fit-content", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: 50 }}>
			<Introduction />
			<Perks />
			<ShopCat />
			<Featured />
			<TopSellers />
			<Achievement />
			<Subscribe />
			<Footer />
		</div>
	);
}

export default body;
