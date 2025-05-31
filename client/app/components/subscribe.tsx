import "./subscribe.css";

function Subscribe() {
	return (
		<div className="subContainer">
			<h1 className="subTitle">Stay Updated</h1>
			<p className="subDescription">Get the latest deals, new arrivals, and exclusive offers delivered to your inbox</p>
			<form>
				<input required type="email" name="email" placeholder="Enter your email address" className="emailInput" />
				<input className="btn" type="submit" value="Subscribe" />
			</form>
			<p>No spam, unsubscribe at any time</p>
		</div>
	);
}

export default Subscribe;
