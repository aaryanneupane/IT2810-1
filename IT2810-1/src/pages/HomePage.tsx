import { useState } from "react";
import Header from "../components/Header";
import HomepageCurrency from "../components/HomepageCurrency";
import "../styles/HomePage.css";
import { SearchBar } from "../components/SearchBar";
import { fetchData } from "../api";
import { useQuery } from "@tanstack/react-query";
import Currency from "../interfaces/currencyInterface";

const HomePage = () => {
  const initialIterate = Math.floor(Math.random() * 170);
  const [iterate, setIterate] = useState(initialIterate); // Initial index

  const { data, isLoading, isError } = useQuery<Currency>({
    queryKey: ["apiData"],
    queryFn: fetchData,
  });

  if (isLoading) {
    // Display the data fetching status accordingly
    return <p>Loading...</p>;
  } else if (isError) {
    return <p>Error fetching </p>;
  }

  // Define the currency codes from the fetched data
  const currencyCodes = Object.keys(data.rates);
  // Slice the currencies to display only the specified count
  const currenciesToDisplay: [string, number][] = currencyCodes.map(
    (currencyCode) => [currencyCode, data.rates[currencyCode]],
  );
  // Function to handle "Previous" button click
  const handlePreviousClick = () => setIterate(iterate > 0 ? iterate - 1 : 169);

  // Function to handle "Next" button click
  const handleNextClick = () => setIterate(iterate < 169 ? iterate + 1 : 0);

  // Get the currency to display based on the current index
  const displayCurrency = currenciesToDisplay[iterate];

  return (
    <div>
      <Header />
      <SearchBar
        currenciesToDisplay={currenciesToDisplay}
        onCurrencySelect={setIterate}
      />
      <HomepageCurrency
        key={displayCurrency[0]}
        currency={displayCurrency[0]}
        rate={displayCurrency[1]}
        nextArrow={handleNextClick}
        prevArrow={handlePreviousClick}
      />
    </div>
  );
};

export default HomePage;
