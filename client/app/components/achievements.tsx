import "./achievements.css";

function sellers() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="achievementIcon lucide lucide-users w-8 h-8 group-hover:scale-110 transition-transform duration-200"
		>
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
			<circle cx="9" cy="7" r="4"></circle>
			<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
			<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
		</svg>
	);
}
function productsListed() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="achievementIcon lucide lucide-shopping-cart w-8 h-8 group-hover:scale-110 transition-transform duration-200"
		>
			<circle cx="8" cy="21" r="1"></circle>
			<circle cx="19" cy="21" r="1"></circle>
			<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
		</svg>
	);
}
function orders() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="achievementIcon lucide lucide-trending-up w-8 h-8 group-hover:scale-110 transition-transform duration-200"
		>
			<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
			<polyline points="16 7 22 7 22 13"></polyline>
		</svg>
	);
}
function countries() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="achievementIcon lucide lucide-map-pin w-8 h-8 group-hover:scale-110 transition-transform duration-200"
		>
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
			<circle cx="12" cy="10" r="3"></circle>
		</svg>
	);
}

function Achievements() {
	return (
		<div className="achievementsContainer">
			<div className="achievement">
				{sellers()}
				<div className="count">50K+</div>
				<div className="name">Active Sellers</div>
			</div>

			<div className="achievement">
				{productsListed()}
				<div className="count">2M+</div>
				<div className="name">Products Listed</div>
			</div>

			<div className="achievement">
				{orders()}
				<div className="count">10M+</div>
				<div className="name">Orders Completed</div>
			</div>

			<div className="achievement">
				{countries()}
				<div className="count">150+</div>
				<div className="name">Countries Served</div>
			</div>
		</div>
	);
}

export default Achievements;
