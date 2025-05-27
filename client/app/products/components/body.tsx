import "./body.css";

import ProdSettings from "./productSettings";

function body() {
	return (
		<div className="body">
			<div className="title">
				<h1>All Products</h1>
				<p>Discover amazing products from trusted sellers</p>
			</div>
			<ProdSettings />
		</div>
	);
}

export default body;
