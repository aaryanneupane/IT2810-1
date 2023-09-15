import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import "../styles/FavouritesPage.css"; // Import the CSS file
import HomepageCurrency from "../components/HomepageCurrency/HomepageCurrency";

const FavouritesPage = () => {
  const initialDisplayCount = 10; // Number of currencies to initially display
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [favourites, setFavourites] = useState<{ currency: string; rate: number; isFavourite: boolean }[]>(
    []
  );

  useEffect(() => {
    // Load favorited currencies from local storage when the component mounts
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      const favouritesData = JSON.parse(storedFavourites);
      setFavourites(favouritesData);
    }
  }, []);

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
          {favourites.slice(0, displayCount).map(({ currency, rate }) => (
            <HomepageCurrency key={currency} currency={currency} rate={rate} />
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
    </div>
  );
};

export default FavouritesPage;