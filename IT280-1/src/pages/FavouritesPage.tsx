import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import "../styles/FavouritesPage.css"; // Import the CSS file
import Currency from "../components/Currency/FavouritepageCurrency";

interface FavouritePageProps {
  apiData: { rates: Record<string, number> };
}

const FavouritesPage: React.FC<FavouritePageProps> = ({ apiData }) => {
  const initialDisplayCount = 10; // Number of currencies to initially display
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [favourites, setFavourites] = useState<
    { currency: string; isFavourite: boolean }[]
  >([]);
  const [displayCurrencies, setDisplayCurrencies] = useState<
    { currency: string; rate: number; isFavourite: boolean }[]
  >([]);

  useEffect(() => {
    // Load favourited currencies from local storage when the component mounts
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      const favouritesData = JSON.parse(storedFavourites);
      setFavourites(favouritesData);
    }
  }, []);

  useEffect(() => {
    if (apiData) {
      // Filter the currencies to display based on the favorites array
      const currenciesToDisplay = favourites
        .filter((favorite) =>
          Object.prototype.hasOwnProperty.call(
            apiData?.rates,
            favorite.currency,
          ),
        )
        .slice(0, displayCount);

      // Convert the currencies to display to include rates and isFavourite
      const currenciesWithRatesAndFavourites = currenciesToDisplay.map(
        (favorite) => ({
          currency: favorite.currency,
          rate: apiData.rates[favorite.currency],
          isFavourite: favorite.isFavourite,
        }),
      );
      setDisplayCurrencies(currenciesWithRatesAndFavourites);
    }
  }, [favourites, displayCount, apiData]);

  const handleLoadMore = () => {
    // Increase the display count to load more currencies
    setDisplayCount((prevCount) => prevCount + 10); // Load the next 10 currencies
  };

  const handleFavouriteClick = (currency: string) => {
    // Filter out the item with the specified currency
    const updatedFavourites = favourites.filter(
      (fav) => fav.currency !== currency,
    );

    // Update the state with the new array
    setFavourites(updatedFavourites);

    // Update the local storage with the new array
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  if (!apiData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="header-text">Your favourite currencies</h1>
        <div className="currency-container">
          {displayCurrencies.map(({ currency, rate, isFavourite }) => (
            <Currency
              key={currency}
              currency={currency}
              rate={rate}
              favourite={isFavourite}
              voidFunc={() => handleFavouriteClick(currency)}
            />
          ))}
        </div>
        <div className="button-container">
          {/* New button container */}
          {favourites.length > displayCount && (
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
