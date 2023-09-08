
export async function fetchData() {
  const apiKey = '817401308b06681425a86c9061ebb82a'; // Your API key

  const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

// export function useApiData() {
//     return useQuery(['apiData'], fetchData); // Provide the query key as an array
// }