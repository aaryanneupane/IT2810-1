export async function fetchData() {
  const apiKey = "b652c68eb4b7f019a911855883262ada"; // Your API key

  const response = await fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

