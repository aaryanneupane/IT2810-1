export async function fetchData() {
  const apiKey = "62e1a010dfc6012cd03d275c1d59fbc6"; // Your API key

  const response = await fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error(
      "Network response was not ok. Most likely a https error, try a vpn. This usually fixes the issue for me.",
    );
  }

  return response.json();
}
