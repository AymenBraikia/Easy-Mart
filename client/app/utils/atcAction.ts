interface Settings {
	loaded: boolean;
	production: boolean;
	serverUrl: string;
}

function atc(settings: Settings, token: string | null, product: { id: number }, isAlreadyIn?: boolean) {
	if (!token || !settings || !product) return;

	if (isAlreadyIn)
		fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + "/removeCat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ id: product.id }),
		});
	else
		fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + "/atc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ id: product.id }),
		});
}

export default atc;
