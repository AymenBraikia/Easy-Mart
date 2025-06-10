"use client";

import styles from "./perks.module.css";
import React, { useRef, useEffect } from "react";

function returns() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
			<path d="M3 3v5h5"></path>
		</svg>
	);
}
function support() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
		</svg>
	);
}
function shipping() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
			<path d="M15 18H9"></path>
			<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
			<circle cx="17" cy="18" r="2"></circle>
			<circle cx="7" cy="18" r="2"></circle>
		</svg>
	);
}
function payments() {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
		</svg>
	);
}

function Perks() {
	const container = useRef<HTMLDivElement>(null);
	const step1 = useRef<HTMLDivElement>(null);
	const step2 = useRef<HTMLDivElement>(null);
	const step3 = useRef<HTMLDivElement>(null);
	const step4 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!step1.current || !container.current) return;
			const rect = step1.current.getBoundingClientRect();
			const isVisible = rect.top < window.innerHeight - 200;

			const steps = [step1, step2, step3, step4];

			steps.forEach((stepRef, idx) => {
				setTimeout(() => {
					if (stepRef.current) {
						stepRef.current.id = isVisible ? "perkActive" : "";
					}
				}, idx * 150);
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div ref={container} className={styles.part1}>
			<div className={styles.steps}>
				<div ref={step1} className={styles.step}>
					<div style={{ color: "rgb(22 163 74)", backgroundColor: "rgb(220 252 231)" }} className={styles.stepIcon}>
						{payments()}
					</div>
					<h2 style={{ color: "rgb(22 163 74)" }} className={styles.stepTitle}>
						Secure Payments
					</h2>
					<div className={styles.stepDescription}>100% Protected</div>
				</div>
				<div ref={step2} className={styles.step}>
					<div style={{ color: "rgb(37 99 235)", backgroundColor: "rgb(219 234 254)" }} className={styles.stepIcon}>
						{shipping()}
					</div>
					<h2 style={{ color: "rgb(37 99 235)" }} className={styles.stepTitle}>
						Fast shipping
					</h2>
					<div className={styles.stepDescription}>2-3 Days Delivery</div>
				</div>
				<div ref={step3} className={styles.step}>
					<div style={{ color: "rgb(237 106 36)", backgroundColor: "rgb(255 237 213)" }} className={styles.stepIcon}>
						{returns()}
					</div>
					<h2 style={{ color: "rgb(237 106 36)" }} className={styles.stepTitle}>
						Easy Returns
					</h2>
					<div className={styles.stepDescription}>30-Day Policy</div>
				</div>
				<div ref={step4} className={styles.step}>
					<div style={{ color: "rgb(147 51 234)", backgroundColor: "rgb(243 232 255)" }} className={styles.stepIcon}>
						{support()}
					</div>
					<h2 style={{ color: "rgb(147 51 234)" }} className={styles.stepTitle}>
						24/7 Support
					</h2>
					<div className={styles.stepDescription}>Always Here</div>
				</div>
			</div>
		</div>
	);
}

export default Perks;
