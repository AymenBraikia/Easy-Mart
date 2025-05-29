"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./nav.css";

function Nav() {
	const slider = useRef<HTMLInputElement>(null);
	const minPrice = useRef<HTMLInputElement>(null);
	const maxPrice = useRef<HTMLInputElement>(null);

	const [[sliderMax, sliderVal], setMin_slider] = useState([1999, 0]);
	const [[mnMax, mxVal], setMax_input] = useState([1, 2000]);

	const [selectedCategories, updateSelectedCats] = useState<string[]>([]);

	function handleCategorySelect(e: ChangeEvent) {
		const val = e.target.getAttribute("data-value");
		if (!val) return;
		if (!selectedCategories.includes(val)) updateSelectedCats([...selectedCategories, val]);
		else
			updateSelectedCats([
				...selectedCategories.filter((e) => {
					return e !== val;
				}),
			]);
	}

	useEffect(() => {
		const container = document.querySelector(".productsContainer");

		if (!container) return;

		const children = Array.from(container.children);

		children.forEach((el) => {
			if (Number(el.getAttribute("data-price")) >= sliderVal && Number(el.getAttribute("data-price")) <= mxVal) {
				el.classList.remove("notSelected");
			} else el.classList.add("notSelected");
		});
	}, [sliderVal, mxVal]);

	useEffect(() => {
		const container = document.querySelector(".productsContainer");

		if (!container) return;

		if (selectedCategories.length == 0) {
			Array.from(container.children).forEach((el) => el.classList.remove("notSelected"));
			return;
		}

		Array.from(container.children).forEach((el) => {
			if (!selectedCategories.includes(el.getAttribute("data-category") || "")) {
				el.classList.add("notSelected");
			} else el.classList.remove("notSelected");
		});
	}, [selectedCategories]);

	useEffect(() => {
		const container = document.querySelector(".productsContainer");

		if (!container) return;

		if (selectedCategories.length == 0) {
			Array.from(container.children).forEach((el) => el.classList.remove("notSelected"));
			return;
		}

		Array.from(container.children).forEach((el) => {
			if (!selectedCategories.includes(el.getAttribute("data-category") || "")) {
				el.classList.add("notSelected");
			} else el.classList.remove("notSelected");
		});
	}, [selectedCategories]);

	function sliderChange() {
		if (!slider.current || !maxPrice.current || !minPrice.current) return;
		setMin_slider([sliderMax, +slider.current.value]);
		setMax_input([sliderVal, mxVal]);
	}

	function setMinPriceRange() {
		if (!slider.current || !maxPrice.current || !minPrice.current) return;

		setMin_slider([sliderMax, +minPrice.current.value]);
		setMax_input([sliderVal, mxVal]);
	}

	function setMaxPriceRange() {
		if (!slider.current || !maxPrice.current || !minPrice.current) return;
		let val = +maxPrice.current.value <= sliderVal ? mnMax + 1 : +maxPrice.current.value;

		val = +maxPrice.current.value > 2000 ? 2000 : val;

		setMax_input([sliderVal, val]);

		setMin_slider([val - 1, +maxPrice.current.value < mnMax ? mnMax : +minPrice.current.value]);
	}

	return (
		<nav>
			<div className="navSection">
				<h3 className="navTitle">Category</h3>
				<div>
					<input onChange={handleCategorySelect} type="checkbox" id="Electronics" data-value={"Electronics"} />
					<label htmlFor="Electronics">Electronics</label>
				</div>
				<div>
					<input onChange={handleCategorySelect} type="checkbox" id="Fashion" data-value={"Fashion"} />
					<label htmlFor="Fashion">Fashion</label>
				</div>
				<div>
					<input onChange={handleCategorySelect} type="checkbox" id="Home" data-value={"Home & Garden"} />
					<label htmlFor="Home">Home & Garden</label>
				</div>
				<div>
					<input onChange={handleCategorySelect} type="checkbox" id="Sports" data-value={"Sports"} />
					<label htmlFor="Sports">Sports</label>
				</div>
				<div>
					<input onChange={handleCategorySelect} type="checkbox" id="Books" data-value={"Books"} />
					<label htmlFor="Books">Books</label>
				</div>
				<div>
					<input onChange={handleCategorySelect} type="checkbox" id="Toys" data-value={"Toys"} />
					<label htmlFor="Toys">Toys</label>
				</div>
			</div>
			<div className="navSection">
				<h3 className="navTitle">Price Range</h3>
				<input ref={slider} onInput={sliderChange} className="rangeInput" type="range" value={sliderVal} min={0} max={sliderMax} />
				<div className="numberInputs">
					<input ref={minPrice} onInput={setMinPriceRange} type="number" value={sliderVal} min={0} max={sliderMax} />
					to
					<input ref={maxPrice} onInput={setMaxPriceRange} type="number" value={mxVal} min={mnMax} max={2000} />
				</div>
			</div>
			<div className="navSection">
				<h3 className="navTitle">Rating</h3>
				<div>
					<input id="stars5" type="checkbox" value={"5 stars & up"} />
					<label htmlFor="stars5">5 stars & up</label>
				</div>
				<div>
					<input id="stars4" type="checkbox" value={"4 stars & up"} />
					<label htmlFor="stars4">4 stars & up</label>
				</div>
				<div>
					<input id="stars3" type="checkbox" value={"3 stars & up"} />
					<label htmlFor="stars3">3 stars & up</label>
				</div>
				<div>
					<input id="stars2" type="checkbox" value={"2 stars & up"} />
					<label htmlFor="stars2">2 stars & up</label>
				</div>
				<div>
					<input id="stars1" type="checkbox" value={"1 stars & up"} />
					<label htmlFor="stars1">1 stars & up</label>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
