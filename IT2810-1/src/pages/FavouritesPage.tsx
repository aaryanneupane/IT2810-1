import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import "../styles/FavouritesPage.css";
import Currency from "../components/FavouritepageCurrency/FavouritepageCurrency";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api";

const FavouritesPage = () => {
  const initialDisplayCount = 10; // Number of currencies to initially display

  const [displayCount, setDisplayCount] = useState(initialDisplayCount); // The displaying currencies count

  const [favourites, setFavourites] = useState<
    { currency: string; isFavourite: boolean }[]
  >([]); // The favourited currencies array from local storage

  const [displayCurrencies, setDisplayCurrencies] = useState<
    { currency: string; rate: number; isFavourite: boolean }[]
  >([]); // The currencies to display

  const { data, isLoading, isError } = useQuery({
    queryKey: ["apiData"],
    queryFn: fetchData,
  });

  const storedFavourites = localStorage.getItem("favourites"); // Retrieve the favourites from local storage

  useEffect(() => {
    // Load favourited currencies from local storage when the component mounts
    if (storedFavourites) {
      const favouritesData = JSON.parse(storedFavourites);
      setFavourites(favouritesData);
    }
  }, [storedFavourites]);

  useEffect(() => {
    if (data) {
      // Filter the currencies to display based on the favorites array
      const currenciesToDisplay = favourites
        .filter((favorite) =>
          Object.prototype.hasOwnProperty.call(data?.rates, favorite.currency),
        )
        .slice(0, displayCount);

      // Convert the currencies to display to include rates and isFavourite
      const currenciesWithRatesAndFavourites = currenciesToDisplay.map(
        (favorite) => ({
          currency: favorite.currency,
          rate: data.rates[favorite.currency],
          isFavourite: favorite.isFavourite,
        }),
      );
      setDisplayCurrencies(currenciesWithRatesAndFavourites);
    }
  }, [favourites, displayCount, data]);

  const handleLoadMore = () => {
    // Increase the display count to load more currencies
    setDisplayCount((prevCount) => prevCount + 10); // Load the next 10 currencies
  };

  const handleFavouriteClick = (currency: string) => {
    // Filter out the item with the specified currency
    const updatedFavourites = favourites.filter(
      (fav) => fav.currency !== currency,
    );

    // Update the favourites array
    setFavourites(updatedFavourites);

    // Update the local storage with the new array
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="header-text">Your favourite currencies</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}
        {!isLoading && !isError && (
          <div>
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
              {favourites.length > displayCount && (
                <button className="button" onClick={handleLoadMore}>
                  Load More
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
