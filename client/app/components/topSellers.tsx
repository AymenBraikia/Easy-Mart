import "./topSellers.css";
import guy1 from "../../public/guy1.png";
import guy2 from "../../public/guy2.png";
import guy3 from "../../public/guy3.png";

import Image from "next/image";

function TopSellers() {
	return (
		<div className="topSellersContainer">
			<h1>Top Sellers</h1>
			<p>Meet our most trusted and highest-rated sellers</p>

			<div className="sellers">
				<div className="seller">
					<div className="pfp">
						<Image src={guy1} alt="Seller" />
						<div className="badge">✓ verified</div>
					</div>

					<div className="name">TechStore Pro</div>

					<div className="rating">
						⭐ 4.9 <span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 10 }}>rating</span>
					</div>

					<div className="products">
						<div className="prodCount">156</div>
						<div className="sales">10k+</div>
					</div>
					<div className="btn visit">Visit Store</div>
				</div>

				<div className="seller">
					<div className="pfp">
						<Image src={guy2} alt="Seller" />
						<div className="badge">✓ verified</div>
					</div>

					<div className="name">EcoFashion</div>

					<div className="rating">
						⭐ 4.8 <span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 10 }}>rating</span>
					</div>

					<div className="products">
						<div className="prodCount">89</div>
						<div className="sales">5k+</div>
					</div>
					<div className="btn visit">Visit Store</div>
				</div>

				<div className="seller">
					<div className="pfp">
						<Image src={guy3} alt="Seller" />
						<div className="badge">✓ verified</div>
					</div>

					<div className="name">PhotoGear</div>

					<div className="rating">
						⭐ 4.7 <span style={{ color: "var(--foreground4)", fontWeight: 400, marginLeft: 10 }}>rating</span>
					</div>

					<div className="products">
						<div className="prodCount">234</div>
						<div className="sales">8k+</div>
					</div>
					<div className="btn visit">Visit Store</div>
				</div>
			</div>
		</div>
	);
}

export default TopSellers;
