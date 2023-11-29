export async function fetchData() {
  const apiKey = "eb196e9f502123e41787e299a3ad2411"; // The API key

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
