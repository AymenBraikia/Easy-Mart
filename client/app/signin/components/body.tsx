"use client";
import "./body.css";
import Theme from "../../components/theme";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function errIcon() {
	return (
		<svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert h-8 w-8 text-red-500">
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
			<path d="M12 8v4"></path>
			<path d="M12 16h.01"></path>
		</svg>
	);
}

function google() {
	return (
		<svg width={20} className="w-5 h-5 mr-2" viewBox="0 0 24 24">
			<path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
			<path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
			<path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path>
			<path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
		</svg>
	);
}
function mail() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-[#eee]">
			<rect width="20" height="16" x="2" y="4" rx="2"></rect>
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
		</svg>
	);
}
function usernameIcon() {
	return (
		<svg width={18} height={18} viewBox="0 0 24 24" fill="none">
			<path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="currentColor" />
			<path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="currentColor" />
		</svg>
	);
}

function lock() {
	return (
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock text-[#eee]">
			<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
			<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
		</svg>
	);
}

function err(reason: string) {
	const el = document.querySelector(".alert p");
	if (!el) return;
	el.innerHTML = reason;
	document.querySelector(".alert")?.classList.add("active");
	setTimeout(() => document.querySelector(".alert")?.classList.remove("active"), 4000);
}

function Body() {
	const form = useRef<HTMLFormElement>(null);
	const emailInp = useRef<HTMLInputElement>(null);
	const usernameInp = useRef<HTMLInputElement>(null);
	const passwordInp = useRef<HTMLInputElement>(null);

	useEffect(() => {
		form.current?.addEventListener("submit", (ev) => {
			ev.preventDefault();

			fetch(settings.production ? settings.serverUrl + "/signup" : "http://localhost:8000/signup", {
				method: "post",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email: emailInp.current?.value,
					password: passwordInp.current?.value,
					username: usernameInp.current?.value,
				}),
			})
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					const result = JSON.parse(data);

					if (result.cookie) document.cookie = `${result.cookie.name} = ${result.cookie.val};`;

					if (result.url) location.href = result.url;

					if (result.reason) err(result.reason);
				});
		});
	});

	const [settings, setSettings] = useState({ production: null, serverUrl: null, loaded: false });

	useEffect(() => {
		if (settings.loaded) return;
		fetch("/settings.json")
			.then((resp) => resp.json())
			.then((results) => {
				setSettings(results);
			})
			.catch((err) => console.error("Failed to load settings:", err));
	}, [settings]);

	const router = useRouter();

	return (
		<>
			<Theme visibility={false}></Theme>

			<div className="container">
				{settings.loaded ? (
					<>
						<div className="part1">
							<h1>Discover Amazing Products</h1>
							<p>Shop with confidence from thousands of verified sellers offering quality products at great prices.</p>
							<div>
								<div>
									100% <p>Secure Payments</p>
								</div>
								<div>
									2-3 <p>Days Delivery</p>
								</div>
								<div>
									30-Day <p>Return Policy</p>
								</div>
								<div>
									24/7 <p>Support</p>
								</div>
							</div>
						</div>
						<div className="part2">
							<h2 style={{ color: "var(--themeClr)" }}>Create Your Account</h2>
							<p style={{ color: "var(--foreground3)" }}>Join thousands of happy customers shopping on Easy Mart</p>

							<form ref={form} action={settings.production ? settings.serverUrl + "/signup" : "http://localhost:8000/signin"} method="POST">
								<div style={{ position: "relative", width: "100%" }}>
									<label className="icon" htmlFor="email">
										{mail()}
									</label>
									<input ref={emailInp} required type="email" id="email" name="email" className="email" placeholder="Email address" />
								</div>

								<div style={{ position: "relative", width: "100%" }}>
									<label className="icon" htmlFor="username">
										{usernameIcon()}
									</label>
									<input ref={usernameInp} required type="text" id="username" name="username" className="username" placeholder="Username" />
								</div>

								<div style={{ position: "relative", width: "100%" }}>
									<label className="icon" htmlFor="password">
										{lock()}
									</label>
									<input ref={passwordInp} required type="password" id="password" name="password" className="password" placeholder="Password" />
								</div>

								<div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
									<input type="checkbox" name="remember" id="remember" />
									<label htmlFor="remember">Remember me</label>
								</div>

								<div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
									<input required type="checkbox" name="terms" id="terms" />
									<label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
								</div>

								<input type="submit" value="Create account" />

								<p>or continue with</p>

								<div className="continue">{google()} Sign up with Google</div>
								<p>
									Don&apos;t have an account?{" "}
									<span
										style={{ color: "var(--themeClr)" }}
										onClick={() => {
											router.push("../signup");
										}}
									>
										Sign up
									</span>
								</p>
							</form>
						</div>
						<div className="alert">
							{errIcon()}
							<p></p>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default Body;
