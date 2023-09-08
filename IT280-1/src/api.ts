import { useQuery } from '@tanstack/react-query';

export async function fetchData() {
  const apiKey = 'cf4503a56ad342f1da412fe786b09be0'; // Your API key

  const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export function useApiData() {
    return useQuery(['apiData'], fetchData); // Provide the query key as an array
}