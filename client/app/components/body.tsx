import dynamic from "next/dynamic";

import Introduction from "./introduction";

// const Introduction = dynamic(() => import("./introduction"), {
// 	loading: () => <p>Loading...</p>,
// 	ssr: true,
// });

import Perks from "./perks";

import ShopCat from "./shopCat";
// const Perks = dynamic(() => import("./perks"), {
// 	loading: () => <p>Loading...</p>,
// });

// const ShopCat = dynamic(() => import("./shopCat"), {
// 	loading: () => <p>Loading...</p>,
// });

const Featured = dynamic(() => import("./featured"), {
	loading: () => <p>Loading...</p>,
	ssr: true,
});

const TopSellers = dynamic(() => import("./topSellers"), {
	loading: () => <p>Loading...</p>,
	ssr: true,
});

const Achievement = dynamic(() => import("./achievements"), {
	loading: () => <p>Loading...</p>,
	ssr: true,
});

const Subscribe = dynamic(() => import("./subscribe"), {
	loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("./footer"), {
	loading: () => <p>Loading...</p>,
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
