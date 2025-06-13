// "use client";
import Link from "next/link";
import styles from "./introduction.module.css";

function Introduction() {
	return (
		<div className={styles.introductionContainer}>
			<h1 className={styles.welcomeMessage}>
				Discover Amazing Products from <br /> <span style={{ color: "#FFEB3B" }}>Trusted Sellers</span>
			</h1>

			<p className={styles.introductionP}>Shop with confidence from thousands of verified sellers offering quality products at great prices.</p>

			<div className={styles.btnsContainer}>
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
