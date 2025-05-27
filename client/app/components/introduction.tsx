"use client";
import "./introduction.css";
import { useRouter } from "next/navigation";

function Introduction() {
	const router = useRouter();

	return (
		<div className="introductionContainer">
			<h1 className="welcomeMessage">
				Discover Amazing Products from <br /> <span style={{ color: "#FFEB3B" }}>Trusted Sellers</span>
			</h1>
			<p className="mrt50" style={{ fontSize: 22, fontWeight: 400, width: "720px", textAlign: "center", position: "relative" }}>
				Shop with confidence from thousands of verified sellers offering quality products at great prices.
			</p>
			<div className="mrt100" style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: 50 }}>
				<div
					onClick={() => {
						router.push("../chat");
					}}
					className="btn introBtn br bold"
				>
					Start Shopping
				</div>
				<div
					onClick={() => {
						router.push("../chat");
					}}
					className="btn introBtn  br bold"
				>
					Become a Seller
				</div>
			</div>
		</div>
	);
}

export default Introduction;
