interface Settings {
	loaded: boolean;
	production: boolean;
	serverUrl: string;
}

function atw(settings: Settings, token: string | null, product: { id: number }, isAlreadyIn?: boolean) {
	if (!token) return;

	if (isAlreadyIn)
		fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + "/removeWishList", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ id: product.id }),
		});
	else
		fetch((settings.production ? settings.serverUrl : "http://localhost:8000") + "/atw", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ id: product.id }),
		});
}

export default atw;
