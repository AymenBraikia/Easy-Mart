"use client";
// import "./responsive.css";
import Header from "../components/header";
import Body from "./components/body";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Body />
			</Suspense>
		</>
	);
}
