import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { fetchData } from '../api'; // Adjust the path accordingly

const HomePage = () => {
  const query = useQuery({
    queryKey: ['apiData'], // Replace with the correct query key if needed
    queryFn: fetchData,    // Use your data fetching function
  });

  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <div>
        <h1>Valuta Gutta</h1>
        {query.isLoading && <p>Loading...</p>}
        {query.isError && <p>Error fetching data</p>}
        {query.data && (
          <ul>
            {Object.entries((query.data as { rates: Record<string, number> }).rates).map(([currency, rate]) => (
              <li key={currency}>
                {currency}: {rate}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button />
    </div>
  );
};

export default HomePage;