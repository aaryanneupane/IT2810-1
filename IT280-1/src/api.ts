export async function fetchData() {
  const apiKey = "206b426c4e8326aac1798099c7d2acab"; // The API key

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
