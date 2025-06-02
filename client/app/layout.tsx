import type { Metadata } from "next";
import localFont from "next/font/local";

const myCustomFont = localFont({
	src: [
		{
			path: "../public/fonts/Ubuntu-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/Ubuntu-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Ubuntu-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/Ubuntu-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		// Add more font variations (italic, different weights) as needed
	],
	display: "swap",
	variable: "--font-ubuntu",
});

import "./globals.css";

export const metadata: Metadata = {
	title: "Easy Mart",
	description: "Online Market place where you can find anything you need",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${myCustomFont.variable}`}>{children}</body>
		</html>
	);
}
