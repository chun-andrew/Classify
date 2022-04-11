retrieveToken();

async function retrieveToken() {
	const clientID = "95a3053093854b948e0e7ab02218af28"; //my personal clientID
	const clientSecret = "155e279a6ac7416f84833a1f99bd1764"; //my personal client Secret

	const result = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
		},
		body: "grant_type=client_credentials",
	});

	const data = await result.json();
	token = data.access_token; //token is retrieved from the JSON response variable to my post request
}
