import { useState } from "react";
import Header from "../components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api"; // Adjust the path accordingly
import HomepageCurrency from "../components/HomepageCurrency/HomepageCurrency";
import * as cc from "currency-codes";
import "../styles/HomePage.css"; // Import the CSS file

const HomePage = () => {
  const query = useQuery({
    queryKey: ["apiData"], // Replace with the correct query key if needed
    queryFn: fetchData, // Use your data fetching function
  });

  const initialIterate = Math.floor(Math.random() * 170);
  const [iterate, setIterate] = useState(initialIterate); // Initial index

  // Check if the data is available before rendering
  if (query.isLoading) {
    return <p>Loading...</p>;
  }

  if (query.isError || !query.data) {
    return <p>Error fetching data</p>;
  }

  // Slice the currencies to display only the specified count
  const currenciesToDisplay: [string, number][] = Object.entries(
    query.data.rates
  ).map(([currencyCode, rate]) => [currencyCode, rate as number]);

  console.log(currenciesToDisplay.length);

  // Function to handle "Previous" button click
  const handlePreviousClick = () => {
    if (iterate > 0) {
      setIterate(iterate - 1);
    }
  };

  // Function to handle "Next" button click
  const handleNextClick = () => {
    if (iterate < currenciesToDisplay.length - 1) {
      setIterate(iterate + 1);
    }
  };

  // Get the currency to display based on the current index
  const displayCurrency = currenciesToDisplay[iterate];

  return (
    <div>
      <Header />
      <button className="prev-button" onClick={handlePreviousClick}>
        Previous currency
      </button>
      <div>
        <HomepageCurrency
          key={displayCurrency[0]}
          currency={cc.code(displayCurrency[0])?.currency ?? displayCurrency[0]}
          rate={displayCurrency[1]}
          favourite={false}
        />
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next currency
      </button>
    </div>
  );
};

export default HomePage;
