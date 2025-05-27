"use client";
import { useEffect } from "react";

function switchTheme() {
	const root = document.querySelector(":root") as HTMLElement,
		sun = document.querySelector(".sun") as HTMLElement,
		moon = document.querySelector(".moon") as HTMLElement,
		darkStyles = `
        --background3: #1f1f1f;
        --background2: #151515;
        --background: #000000;
        --foreground: #ffffff;
        --foreground2: #fbfbfb;
        --foreground3: #eee;
        --background-opacity: #00000099;`,
		lightStyles = `
        --background3: #eee;
        --background2: #fbfbfb;
        --background: #ffffff;
        --foreground: #000000;
		--foreground2: #171717;
		--foreground3: #2b2b2b;
        --background-opacity: #ffffff99;`;

	let styles = null;
	const theme = localStorage.getItem("theme");

	if (!theme) {
		localStorage.setItem("theme", "dark");
		styles = darkStyles;

		sun.classList.remove("active");
		moon.classList.add("active");
		root.style.cssText = styles;
		return;
	}

	if (theme == "light") {
		localStorage.setItem("theme", "dark");
		styles = darkStyles;

		sun.classList.remove("active");
		moon.classList.add("active");
	} else {
		localStorage.setItem("theme", "light");
		styles = lightStyles;

		moon.classList.remove("active");
		sun.classList.add("active");
	}

	root.style.cssText = styles;
}

function loadTheme() {
	const root = document.querySelector(":root") as HTMLElement,
		darkStyles = `
        --background3: #eee;
        --background2: #fbfbfb;
        --background: #ffffff;
        --foreground: #000000;
		--foreground2: #171717;
		--foreground3: #2b2b2b;
        --background-opacity: #ffffff99;`,
		lightStyles = `
        --background3: #1f1f1f;
        --background2: #151515;
        --background: #000000;
        --foreground: #ffffff;
        --foreground2: #fbfbfb;
        --foreground3: #eee;
        --background-opacity: #00000099;`;

	let styles = null;
	const theme = localStorage.getItem("theme");

	if (!theme) localStorage.setItem("theme", "light");

	if (theme == "light") styles = darkStyles;
	else styles = lightStyles;

	root.style.cssText = styles;
}

function Moon() {
	return (
		<svg className="moon" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.02911 12.42C2.38911 17.57 6.75911 21.76 11.9891 21.99C15.6791 22.15 18.9791 20.43 20.9591 17.72C21.7791 16.61 21.3391 15.87 19.9691 16.12C19.2991 16.24 18.6091 16.29 17.8891 16.26C12.9991 16.06 8.99911 11.97 8.97911 7.13996C8.96911 5.83996 9.23911 4.60996 9.72911 3.48996C10.2691 2.24996 9.61911 1.65996 8.36911 2.18996C4.40911 3.85996 1.69911 7.84996 2.02911 12.42Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
function Sun() {
	return (
		<svg className="sun" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
			<g>
				<circle fillRule="evenodd" clipRule="evenodd" fill="currentColor" cx="32.003" cy="32.005" r="16.001" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4
		s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656
		c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4
		s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004
		s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M60.006,27.997l-4.009,0.008
		c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4
		C64.002,29.79,62.217,27.997,60.006,27.997z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657
		c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4
		c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="currentColor"
					d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004
		c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653
		L12.212,17.855z"
				/>
			</g>
		</svg>
	);
}

interface prop{
	visibility:boolean
}

function Theme(props:prop) {
	useEffect(() => {
		const theme = localStorage.getItem("theme"),
			sun = document.querySelector(".sun") as HTMLElement,
			moon = document.querySelector(".moon") as HTMLElement;

		if (!theme) localStorage.setItem("theme", "light");

		if (theme == "dark") moon.classList.add("active");
		else sun.classList.add("active");

		loadTheme();
	}, []);

	return (
		// <div style={{ width: 70, height: 70, backgroundColor: "var(--background)", borderRadius: "50%", position: "fixed", right: 50, bottom: 50, cursor: "pointer", zIndex: 5, overflow: "hidden" }}>
		<div style={{ width: 50, height: 50, backgroundColor: "transparent", borderRadius: "50%", position: "relative", cursor: "pointer", zIndex: 5, overflow: "hidden", display: props.visibility ? "flex" : "none" }}>
			<div onClick={switchTheme}>
				{Moon()}
				{Sun()}
			</div>
		</div>
	);
}

export default Theme;
