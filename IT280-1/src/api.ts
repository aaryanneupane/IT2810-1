export async function fetchData() {
  const apiKey = "52d136b803554531e2d112135ba38576"; // Your API key

  const response = await fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

