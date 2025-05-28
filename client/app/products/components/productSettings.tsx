"use client";
import "./productSettings.css";
import { useState, MouseEvent, useRef } from "react";

function HandleClick(ev: MouseEvent) {
	document.querySelector(".gridIcon")?.classList.remove("active");
	document.querySelector(".listIcon")?.classList.remove("active");

	console.log(ev.currentTarget);
	ev.currentTarget.classList.add("active");
}

function grid() {
	return (
		<svg onClick={HandleClick} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="gridIcon active lucide lucide-grid3x3 h-4 w-4">
			<rect width="18" height="18" x="3" y="3" rx="2"></rect>
			<path d="M3 9h18"></path>
			<path d="M3 15h18"></path>
			<path d="M9 3v18"></path>
			<path d="M15 3v18"></path>
		</svg>
	);
}
function list() {
	return (
		<svg
			onClick={HandleClick}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="listIcon lucide lucide-list h-4 w-4"
		>
			<line x1="8" x2="21" y1="6" y2="6"></line>
			<line x1="8" x2="21" y1="12" y2="12"></line>
			<line x1="8" x2="21" y1="18" y2="18"></line>
			<line x1="3" x2="3.01" y1="6" y2="6"></line>
			<line x1="3" x2="3.01" y1="12" y2="12"></line>
			<line x1="3" x2="3.01" y1="18" y2="18"></line>
		</svg>
	);
}

function ProdSettings() {
	const filterList = useRef<HTMLDivElement>(null);
	const selectBtn = useRef<HTMLButtonElement>(null);

	function handleFilterClick() {
		if (filterList.current) filterList.current.classList.toggle("block");
		setTimeout(() => {
			if (!filterList.current) return;

			filterList.current.classList.toggle("active");
		}, 1);
	}
	function select(ev: MouseEvent) {
		if (filterList.current) filterList.current.classList.toggle("active");

		if (selectBtn.current && ev.currentTarget.textContent) selectBtn.current.innerHTML = ev.currentTarget.textContent;

		setTimeout(() => {
			if (!filterList.current) return;
			filterList.current.classList.remove("block");
		}, 300);
	}

	const [settings, setSettings] = useState({ loaded: false, production: false, serverUrl: "" });
	const [data, setData] = useState([]);

	async function fetchData() {
		if (!settings.loaded) {
			const newSettings = await (await fetch("/settings.json")).json();
			setSettings(newSettings);
		} else if (!data.length) {
			const newData = await (await fetch(settings.production ? settings.serverUrl : "http://localhost:8000" + "/products")).json();
			setData(JSON.parse(newData));
		}
	}
	fetchData();
	return settings.loaded && data.length ? (
		<div style={{ width: "100%", height: 80, borderRadius: 15, border: "2px solid var(--background4)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 50px", backgroundColor: "var(--background)" }}>
			<div className="count">{data.length} products found</div>
			<div className="display">
				<div style={{ position: "relative" }}>
					<button ref={selectBtn} onClick={handleFilterClick} className="btn filter">
						Featured
					</button>
					<div ref={filterList} className="filtersList">
						<div onClick={select}>Featured</div>
						<div onClick={select}>Low to High Price</div>
						<div onClick={select}>High to Low Price</div>
						<div onClick={select}>Highest Ratted</div>
						<div onClick={select}>Newest</div>
					</div>
				</div>

				<div className="displayStyle">
					{grid()}
					{list()}
				</div>
			</div>
		</div>
	) : (
		<h1>Loading...</h1>
	);
}
export default ProdSettings;
