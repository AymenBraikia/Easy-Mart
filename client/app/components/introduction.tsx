// "use client";
import Link from "next/link";
import styles from "./introduction.module.css";

function Introduction() {
	return (
		<div className={styles.introductionContainer}>
			<h1 className={styles.welcomeMessage}>
				Discover Amazing Products from <br /> <span style={{ color: "#FFEB3B" }}>Trusted Sellers</span>
			</h1>

			<p style={{ fontSize: 22, fontWeight: 400, marginTop: 50, width: "720px", textAlign: "center", position: "relative" }}>Shop with confidence from thousands of verified sellers offering quality products at great prices.</p>

			<div style={{ marginTop: 100, display: "flex", justifyContent: "center", alignItems: "center", columnGap: 50 }}>
				<Link href={"../products"} className={styles.introBtn}>
					Start Shopping
				</Link>

				<Link href={"../products"} className={styles.introBtn}>
					Become a Seller
				</Link>
			</div>
		</div>
	);
}

export default Introduction;
