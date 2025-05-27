import "./featured.css";
import Image from "next/image";
import headPhones from "../../public/headphones.png";
import smartWatch from "../../public/smartWatch.png";
import tShirt from "../../public/t-shirt.png";
import cameraLens from "../../public/cameraLens.png";
import coffee from "../../public/coffee-beans.png";
import deskLamp from "../../public/minimalist-desk-lamp.png";

function Featured() {
	return (
		<div className="featruedContainer">
			<h1 className="featured">Featured Products</h1>
			<div className="">
				<p style={{ fontSize: 18 }}>Handpicked items from our top-rated sellers</p>
				<div className="btn viewAll">View All →</div>
			</div>
			<div className="productsList">
				<div className="product">
					<Image src={headPhones} alt="headphones" className="productImg" />

					<div className="productInfo">
						<div>
							<div className="productName">Wireless Bluetooth Headphones</div>
							<div className="rating">
								⭐4.6 <span style={{ color: "var(--foreground3)" }}>(156)</span>
							</div>
						</div>
						<div>
							<div className="productPrice">
								<div className="new">$89.99</div>
								<div className="old">$129.99</div>
							</div>
							<div className="atc btn br">Add to Cart</div>
						</div>
					</div>
				</div>

				<div className="product">
					<Image src={smartWatch} alt="smart watch" className="productImg" />

					<div className="productInfo">
						<div>
							<div className="productName">Smart Fitness Watch</div>
							<div className="rating">
								⭐4.6 <span style={{ color: "var(--foreground3)" }}>(156)</span>
							</div>
						</div>
						<div>
							<div className="productPrice">
								<div className="new">$199.99</div>
								<div className="old">$249.99</div>
							</div>
							<div className="atc btn br">Add to Cart</div>
						</div>
					</div>
				</div>

				<div className="product">
					<Image src={tShirt} alt="Organic Cotton T-Shirt" className="productImg" />

					<div className="productInfo">
						<div>
							<div className="productName">Organic Cotton T-Shirt</div>
							<div className="rating">
								⭐4.6 <span style={{ color: "var(--foreground3)" }}>(156)</span>
							</div>
						</div>
						<div>
							<div className="productPrice">
								<div className="new">$24.99</div>
								<div className="old">$34.99</div>
							</div>
							<div className="atc btn br">Add to Cart</div>
						</div>
					</div>
				</div>

				<div className="product">
					<Image src={cameraLens} alt="Camera Lens" className="productImg" />

					<div className="productInfo">
						<div>
							<div className="productName">Professional Camera Lens</div>
							<div className="rating">
								⭐4.6 <span style={{ color: "var(--foreground3)" }}>(156)</span>
							</div>
						</div>
						<div>
							<div className="productPrice">
								<div className="new">$499.99</div>
								<div className="old">$599.99</div>
							</div>
							<div className="atc btn br">Add to Cart</div>
						</div>
					</div>
				</div>

				<div className="product">
					<Image src={coffee} alt="Coffee Beans" className="productImg" />

					<div className="productInfo">
						<div>
							<div className="productName">Artisan Coffee Beans</div>
							<div className="rating">
								⭐4.6 <span style={{ color: "var(--foreground3)" }}>(156)</span>
							</div>
						</div>
						<div>
							<div className="productPrice">
								<div className="new">$18.99</div>
								<div className="old">$24.99</div>
							</div>
							<div className="atc btn br">Add to Cart</div>
						</div>
					</div>
				</div>

				<div className="product">
										<Image src={deskLamp} alt="Desk lamp" className="productImg" />

					<div className="productInfo">
						<div>
							<div className="productName">Minimalist Desk Lamp</div>
							<div className="rating">
								⭐4.6 <span style={{ color: "var(--foreground3)" }}>(156)</span>
							</div>
						</div>
						<div>
							<div className="productPrice">
								<div className="new">$79.99</div>
								<div className="old">$99.99</div>
							</div>
							<div className="atc btn br">Add to Cart</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Featured;
