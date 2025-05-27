import "./shopCat.css";
function ShopCat() {
	return (
		<div className="shopContainer">
			<h1>Shop By Category</h1>
        	<p>Explore our diverse range of categories and find exactly what you&apos;re looking for</p>
            <div className="list">
                <div>
                    <div className="ico">📱</div>
                    <div className="category">Electronics</div>
                    <div className="itemCount">2.5k+ items</div>
                </div>
                <div>
                    <div className="ico">👕</div>
                    <div className="category">Fashion</div>
                    <div className="itemCount">1.8k+ items</div>
                </div>
                <div>
                    <div className="ico">🏠</div>
                    <div className="category">Home & Garden</div>
                    <div className="itemCount">950+ items</div>
                </div>
                <div>
                    <div className="ico">⚽</div>
                    <div className="category">Sports</div>
                    <div className="itemCount">720+ items</div>
                </div>
                <div>
                    <div className="ico">📚</div>
                    <div className="category">Books</div>
                    <div className="itemCount">1.2k+ items</div>
                </div>
                <div>
                    <div className="ico">🧸</div>
                    <div className="category">Toys</div>
                    <div className="itemCount">680+ items</div>
                </div>
            </div>
		</div>
	);
}

export default ShopCat;
