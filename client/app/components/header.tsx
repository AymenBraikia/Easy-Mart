"use client";

// import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./header.css";
import "./theme.css";
import Theme from "./theme";

function heart() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-4 h-4">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
		</svg>
	);
}
function cart() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-4 h-4">
			<circle cx="8" cy="21" r="1"></circle>
			<circle cx="19" cy="21" r="1"></circle>
			<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
		</svg>
	);
}
function profile() {
	return (
		<svg width="20" height="20" viewBox="0 0 20 20" version="1.1">
			<title>profile</title>
			<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Dribbble-Light-Preview" transform="translate(-420.000000, -2159.000000)" fill="currentColor">
					<g id="icons" transform="translate(56.000000, 160.000000)">
						<path
							d="M374,2009 C371.794,2009 370,2007.206 370,2005 C370,2002.794 371.794,2001 374,2001 C376.206,2001 378,2002.794 378,2005 C378,2007.206 376.206,2009 374,2009 M377.758,2009.673 C379.124,2008.574 380,2006.89 380,2005 C380,2001.686 377.314,1999 374,1999 C370.686,1999 368,2001.686 368,2005 C368,2006.89 368.876,2008.574 370.242,2009.673 C366.583,2011.048 364,2014.445 364,2019 L366,2019 C366,2014 369.589,2011 374,2011 C378.411,2011 382,2014 382,2019 L384,2019 C384,2014.445 381.417,2011.048 377.758,2009.673"
							id="profile-[#1335]"
						></path>
					</g>
				</g>
			</g>
		</svg>
	);
}

function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}
function DeleteCookie(name: string): void {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function Header() {
	// const router = useRouter();
	const scrollProgress = useRef<HTMLDivElement>(null);
	const header = useRef<HTMLDivElement>(null);
	const cartBtn = useRef<HTMLDivElement>(null);
	const wishBtn = useRef<HTMLDivElement>(null);

	const [username, setUsername] = useState<string | null>(null);
	const [settings, setSettings] = useState({ loaded: false, production: false, serverUrl: "" });

	// fetch settings.json file to get the server url (localhost for dev)
	useEffect(() => {
		async function fetchSettings() {
			if (settings.loaded) return;

			const newSettings = await (await fetch("/settings.json")).json();
			setSettings(newSettings);
		}

		fetchSettings();
	});

	useEffect(() => {
		const name = getCookie("username");
		setUsername(name);

		async function get_wishList() {
			const wishData = JSON.parse(await (await fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + "/wishList?username=" + name)).json()).wishList;

			localStorage.setItem("wishList", JSON.stringify(wishData));

			wishBtn.current?.classList.add("active");
			wishBtn.current?.setAttribute("data-len", wishData.length.toString());
		}
		async function get_cartList() {
			const url = (settings.production ? settings.serverUrl : "http://localhost:8000") + "/cart?username=" + name;
			console.log(settings.production, settings.serverUrl, url);
			const cartData = JSON.parse(await (await fetch(url)).json()).cart;

			localStorage.setItem("cartList", JSON.stringify(cartData));

			cartBtn.current?.classList.add("active");
			cartBtn.current?.setAttribute("data-len", cartData.length.toString());
		}

		if (name) {
			get_wishList();
			get_cartList();
		}

		const handleScroll = () => {
			if (scrollY > 50) header.current?.classList.add("active");
			else header.current?.classList.remove("active");

			const scrollTop = scrollY;
			const docHeight = document.documentElement.scrollHeight - innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			if (scrollProgress.current) scrollProgress.current.style.width = scrollPercent + "%";
		};

		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, [settings.production, settings.serverUrl]);

	return (
		<header ref={header}>
			<h1 onClick={() => (location.pathname = "/")} style={{ position: "relative", left: "10%" }}>
				Easy Mart
			</h1>

			<nav className="navbar">
				<div
					onClick={() => {
						open("https://mail.google.com/mail/?view=cm&fs=1&to=contact@easymart.com");
					}}
					className="section"
				>
					Contact
				</div>
				<div onClick={() => (location.href = "/about")} className="section">
					About Us
				</div>
				<div onClick={() => (location.href = "/tos")} className="section">
					Terms of Use
				</div>

				{!username ? (
					<>
						<div className="btn wish headerBtn" onClick={() => (location.href = "/wishList")}>
							{heart()}
						</div>
						<div className="btn cart headerBtn" onClick={() => (location.href = "/cart")}>
							{cart()}
						</div>
						<div className="btn headerBtn signin" onClick={() => (location.href = "/signin")}>
							{profile()}Sign In
						</div>
						{/* <div className="btn headerBtn" onClick={() => router.push("/signin")}>
							{heart()}Wish List
						</div>
						<div className="btn headerBtn" onClick={() => router.push("/signin")}>
							{cart()}
						</div>
						<div className="btn headerBtn" onClick={() => router.push("/signin")}>
							{profile()}Sign In
						</div> */}
					</>
				) : (
					<>
						<div
							className="section"
							onClick={() => {
								DeleteCookie("username");
								DeleteCookie("account");

								location.reload();
							}}
						>
							Sign Out
						</div>
						<div className="profile">
							<h4 className="profileUsername">{username}</h4>
							<Pfp />
						</div>
						<div ref={wishBtn} className="btn wish headerBtn" onClick={() => (location.href = "/wishList")}>
							{heart()}
						</div>
						<div ref={cartBtn} className="btn cart headerBtn" onClick={() => (location.href = "/cart")}>
							{cart()}
						</div>
					</>
				)}

				<Theme visibility={true} />
			</nav>

			<div ref={scrollProgress} className="scrollProgress"></div>
		</header>
	);
}

function Pfp() {
	return (
		<svg width={25} height={25} viewBox="0 0 24 24" fill="none">
			<path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="currentColor" />
			<path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="currentColor" />
		</svg>
	);
}

export default Header;
