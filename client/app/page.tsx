"use client";
import "./responsive.module.css";
import Header from "./components/header";
import Body from "./components/body";
import { useContext } from "react";

import SettingsContext from "./settingsContext";

export default function Home() {
	return (
		<SettingsContext.Provider value={useContext(SettingsContext)}>
			<Header />
			<Body />
		</SettingsContext.Provider>
	);
}
