import styles from "./shopCat.module.css";
function ShopCat() {
	return (
		<div className={styles.shopContainer}>
			<h1>Shop By Category</h1>
			<p>Explore our diverse range of categories and find exactly what you&apos;re looking for</p>
			<div className={styles.list}>

				<div className={styles.listChild}>
					<div className={styles.ico}>📱</div>
					<div className={styles.category}>Electronics</div>
					<div className={styles.itemCount}>2.5k+ items</div>
				</div>

				<div className={styles.listChild}>
					<div className={styles.ico}>👕</div>
					<div className={styles.category}>Fashion</div>
					<div className={styles.itemCount}>1.8k+ items</div>
				</div>

				<div className={styles.listChild}>
					<div className={styles.ico}>🏠</div>
					<div className={styles.category}>Home & Garden</div>
					<div className={styles.itemCount}>950+ items</div>
				</div>

				<div className={styles.listChild}>
					<div className={styles.ico}>⚽</div>
					<div className={styles.category}>Sports</div>
					<div className={styles.itemCount}>720+ items</div>
				</div>

				<div className={styles.listChild}>
					<div className={styles.ico}>📚</div>
					<div className={styles.category}>Books</div>
					<div className={styles.itemCount}>1.2k+ items</div>
				</div>

				<div className={styles.listChild}>
					<div className={styles.ico}>🧸</div>
					<div className={styles.category}>Toys</div>
					<div className={styles.itemCount}>680+ items</div>
				</div>
                
			</div>
		</div>
	);
}

export default ShopCat;
