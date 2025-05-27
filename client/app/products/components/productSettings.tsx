import "./productSettings.css";

function ProdSettings() {
	return (
		<>
			<div className="count"></div>
			<select className="filter">
				<option value="Featured">Featured</option>
				<option value="Low to High Price">Low to High Price</option>
				<option value="High to Low Price">High to Low Price</option>
				<option value="Highest Ratted">Highest Ratted</option>
				<option value="Newest">Newest</option>
			</select>

			<div className="displayStyle">
				<div className="grid"></div>
				<div className="list"></div>
			</div>
		</>
	);
}
export default ProdSettings;
