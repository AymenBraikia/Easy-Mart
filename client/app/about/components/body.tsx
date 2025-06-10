"use client";
import styles from "./body.module.css";
import { useRouter } from "next/navigation";

function quality() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check h-10 w-10 text-green-500 mb-4">
			<circle cx="12" cy="12" r="10"></circle>
			<path d="m9 12 2 2 4-4"></path>
		</svg>
	);
}
function community() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-10 w-10 text-green-500 mb-4">
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx="9" cy="7" r="4"></circle>
			<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
			<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
		</svg>
	);
}
function global() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-10 w-10 text-green-500 mb-4">
			<circle cx="12" cy="12" r="10"></circle>
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
			<path d="M2 12h20"></path>
		</svg>
	);
}
function trust() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-10 w-10 text-green-500 mb-4">
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
			<path d="m9 12 2 2 4-4"></path>
		</svg>
	);
}

function Body() {
	const router = useRouter();
	return (
		<div className={styles.contaienrcontainer}>
			<div className={styles.intro}>
				<h1>About Easy Mart</h1>
				<p className={styles.introDescription}>Your trusted marketplace for quality products from verified sellers worldwide.</p>
			</div>

			<div className={styles.story}>
				<h2 className={styles.storyTitle}>Our Story</h2>
				<p className={styles.storyDescription}>
					Founded in 2020, Easy Mart began with a simple mission: to create a trusted online marketplace where buyers could find quality products from verified sellers around the world. <br /> <br />
					What started as a small platform with just a few hundred products has grown into a global marketplace with millions of listings across dozens of categories. Our commitment to quality, trust, and customer satisfaction has remained unchanged
					throughout our journey. <br /> <br />
					Today, Easy Mart connects thousands of sellers with millions of customers worldwide, facilitating safe and seamless transactions every day. We continue to innovate and improve our platform to provide the best possible experience for our
					community.
				</p>
			</div>

			<div className={styles.mission}>
				<h2 className={styles.missionTitle}>Our Mission & Values</h2>
				<p className={styles.missionDescription}>
					We&apos;re driven by our commitment to creating a trusted marketplace that <br /> benefits both buyers and sellers.
				</p>

				<div className={styles.perks}>
					<div className={styles.perk}>
						<div className={styles.perkIcon}>{quality()}</div>
						<h3 className={styles.perkTitle}>Quality</h3>
						<p className={styles.perkDescription}>We maintain high standards for all products listed on our platform, ensuring customers receive exactly what they expect.</p>
					</div>
					<div className={styles.perk}>
						<div className={styles.perkIcon}>{community()}</div>
						<h3 className={styles.perkTitle}>Community</h3>
						<p className={styles.perkDescription}>We foster a supportive community of buyers and sellers, encouraging collaboration and mutual growth.</p>
					</div>
					<div className={styles.perk}>
						<div className={styles.perkIcon}>{global()}</div>
						<h3 className={styles.perkTitle}>Global Access</h3>
						<p className={styles.perkDescription}>We break down geographical barriers, connecting sellers and buyers from around the world.</p>
					</div>
					<div className={styles.perk}>
						<div className={styles.perkIcon}>{trust()}</div>
						<h3 className={styles.perkTitle}>Trust & Safety</h3>
						<p className={styles.perkDescription}>We prioritize secure transactions and protect our users&apos; data with industry-leading security measures.</p>
					</div>
				</div>
			</div>

			<div className={styles.impact}>
				<h2 className={styles.impactTitle}>Our Impact</h2>
				<p className={styles.impactDescription}>
					Easy Mart has made a significant impact on the global e-commerce <br /> landscape.
				</p>

				<div className={styles.stats}>
					<div className={styles.stat}>
						<h2 className={styles.statValue}>50k+</h2>
						<p className={styles.statName}>Active Sellers</p>
					</div>

					<div className={styles.stat}>
						<h2 className={styles.statValue}>2M+</h2>
						<p className={styles.statName}>Products Listed</p>
					</div>

					<div className={styles.stat}>
						<h2 className={styles.statValue}>10M+</h2>
						<p className={styles.statName}>Orders Completed</p>
					</div>

					<div className={styles.stat}>
						<h2 className={styles.statValue}>150+</h2>
						<p className={styles.statName}>Countries Served</p>
					</div>
				</div>
			</div>
			<div className={styles.community}>
				<h1 className={styles.communityTitle}>Join Our Community</h1>
				<p className={styles.communityDescription}>
					Whether you&apos;re looking to shop or sell, Easy Mart welcomes you to our <br /> global marketplace.
				</p>
				<div className={styles.btns}>
					<button onClick={() => router.push("/signup")} className={styles.signup}>
						Creat an Account
					</button>
					<button onClick={() => router.push("/signup")} className={styles.seller}>
						Become a Seller
					</button>
				</div>
			</div>
		</div>
	);
}

export default Body;
