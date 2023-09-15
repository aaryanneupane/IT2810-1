export async function fetchData() {
  const apiKey = "cd93641992c094d58b27cd240e2aeeb6"; // Your API key

  const response = await fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

