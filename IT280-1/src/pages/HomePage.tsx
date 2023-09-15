import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import HomepageCurrency from "../components/HomepageCurrency/HomepageCurrency";
import * as cc from "currency-codes";
import "../styles/HomePage.css"; // Import the CSS file

const HomePage = () => {
  // Retrieve the API data from session storage
  const sessionData = sessionStorage.getItem("apiData");
  const apiData = sessionData ? JSON.parse(sessionData) : null;

  const initialIterate = Math.floor(Math.random() * 170);
  const [iterate, setIterate] = useState(initialIterate); // Initial index

  // Continue with the rest of your code to display the data and handle navigation

  // Check if the data is available before rendering
  if (!apiData) {
    return <p>Loading...</p>;
  }

  // Slice the currencies to display only the specified count
  const currenciesToDisplay: [string, number][] = Object.entries(
    apiData?.rates ?? {}
  ).map(([currencyCode, rate]) => [currencyCode, rate as number]);

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
          // displayCurrency[0])?.currency ?? displayCurrency[0]
          currency={displayCurrency[0]}
          rate={displayCurrency[1]}
        />
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next currency
      </button>
    </div>
  );
};

export default HomePage;