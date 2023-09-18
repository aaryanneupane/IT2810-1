import { useState } from "react";
import Header from "../components/Header/Header";
import HomepageCurrency from "../components/HomepageCurrency/HomepageCurrency";
import "../styles/HomePage.css"; // Import the CSS file
import { SearchBar } from "../components/SearchBar/SearchBar";

interface HomePageProps {
  apiData: { rates: Record<string, number> };
}

const HomePage: React.FC<HomePageProps> = ({ apiData }) => {
  const initialIterate = Math.floor(Math.random() * 170);
  const [iterate, setIterate] = useState(initialIterate); // Initial index

  // If apiData is not available yet, render "Loading..."
  if (!apiData) {
    return <p>Loading...</p>;
  }

  // Slice the currencies to display only the specified count
  const currenciesToDisplay: [string, number][] = Object.entries(
    apiData?.rates ?? {},
  ).map(([currencyCode, rate]) => [currencyCode, rate as number]);

  // Function to handle "Previous" button click
  const handlePreviousClick = () => setIterate(iterate > 0 ? iterate - 1 : 169);

  // Function to handle "Next" button click
  const handleNextClick = () => setIterate(iterate < 169 ? iterate + 1 : 0);

  // Get the currency to display based on the current index
  const displayCurrency = currenciesToDisplay[iterate];

  return (
    <div>
      <Header />
      <button className="arrow left" onClick={handlePreviousClick}></button>
      <div>
        <div>
          <SearchBar
            currenciesToDisplay={currenciesToDisplay}
            onCurrencySelect={setIterate}
          />
        </div>

        <HomepageCurrency
          key={displayCurrency[0]}
          currency={displayCurrency[0]}
          rate={displayCurrency[1]}
        />
      </div>

      <button className="arrow right" onClick={handleNextClick}></button>
    </div>
  );
};

export default HomePage;
