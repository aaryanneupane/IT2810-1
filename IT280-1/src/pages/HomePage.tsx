import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import {useQuery} from '@tanstack/react-query';

import { fetchData } from '../api'; // Adjust the path accordingly

const HomePage = () => {
  const query = useQuery({
    queryKey: ['apiData'], // Replace with the correct query key if needed
    queryFn: fetchData,    // Use your data fetching function
  });

  // Helper function to sort currencies alphabetically
  const sortCurrencies = (rates: Record<string, number>) => {
    return Object.entries(rates)
      .sort(([currencyA], [currencyB]) => currencyA.localeCompare(currencyB))
      .reduce((sortedRates, [currency, rate]) => {
        sortedRates[currency] = rate;
        return sortedRates;
      }, {} as Record<string, number>);
  };

  

  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <div>
        <h1>Valuta Gutta</h1>
        {query.isLoading && <p>Loading...</p>}
        {query.isError && <p>Error fetching data</p>}
        {query.data && (
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Exchange Rate</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(sortCurrencies(query.data.rates)).map(([currency, rate]) => (
                <tr key={currency}>
                  <td>{currency}</td>
                  <td>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HomePage;