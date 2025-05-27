import Introduction from "./introduction";
import Perks from "./perks";
import ShopCat from "./shopCat";
import Featured from "./featured";
import TopSellers from "./topSellers";
import Achievement from "./achievements";
import Subscribe from "./subscribe";

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
		</div>
	);
}

export default body;
