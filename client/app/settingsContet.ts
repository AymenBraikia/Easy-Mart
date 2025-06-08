import { createContext } from "react";

const settings = {
	loaded: true,
	production: false,
	serverUrl: "https://easy-mart-4upi.onrender.com",
};
const SettingsContext = createContext(settings);

export default SettingsContext;
