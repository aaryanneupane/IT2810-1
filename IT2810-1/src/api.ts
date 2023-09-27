export async function fetchData() {
  const apiKey = "9fa3b491b64d5e01acb2fd1f4529d1f2"; // The API key

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
