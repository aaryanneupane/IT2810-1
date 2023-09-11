import Header from "../components/Header/Header";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api"; // Adjust the path accordingly
import "../styles/FavouritesPage.css"; // Import the CSS file
import Currency from "../components/Currency/Currency";

const FavouritesPage = () => {
  const initialDisplayCount = 10; // Number of currencies to initially display
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const query = useQuery({
    queryKey: ["apiData"], // Replace with the correct query key if needed
    queryFn: fetchData, // Use your data fetching function
  });

  // Helper function to sort currencies alphabetically
  const sortCurrencies = (rates: Record<string, number>) => {
    return Object.entries(rates)
      .sort(([currencyA], [currencyB]) => currencyA.localeCompare(currencyB))
      .reduce(
        (sortedRates, [currency, rate]) => {
          sortedRates[currency] = rate;
          return sortedRates;
        },
        {} as Record<string, number>
      );
  };

  // Check if the data is available before rendering
  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  if (query.isError || !query.data) {
    return <p>Error fetching data</p>;
  }

  // Slice the currencies to display only the specified count
  const sortedCurrencies = sortCurrencies(query.data.rates);
  const currenciesToDisplay = Object.entries(sortedCurrencies).slice(
    0,
    displayCount
  );

  const handleLoadMore = () => {
    // Increase the display count to load more currencies
    setDisplayCount((prevCount) => prevCount + 10); // Load the next 10 currencies
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="header-text">Your favourite currencies</h1>
        <div className="currency-container">
          {currenciesToDisplay.map(([currency, rate]) => (
            <Currency
              key={currency}
              currency={currency}
              rate={rate}
              favourite={false}
            />
          ))}
        </div>
        <div className="button-container">
          {" "}
          {/* New button container */}
          {currenciesToDisplay.length <
            Object.keys(sortedCurrencies).length && (
            <button className="button" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
