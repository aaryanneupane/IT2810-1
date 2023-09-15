import React, { useState, useEffect } from "react";
import styles from "./HomepageCurrency.module.css";

interface CurrencyProps {
  currency: string;
  rate: number;
}

const HomepageCurrency: React.FC<CurrencyProps> = ({ currency, rate }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    // Load favorite state from local storage when the component mounts
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      const favourites = JSON.parse(storedFavourites);
      const isCurrencyFavorited = favourites.some(
        (fav: { currency: string; rate: number; isFavourite: boolean }) =>
          fav.currency === currency && fav.rate === rate
      );
      setIsFavourite(isCurrencyFavorited);
      console.log(favourites);
    }
  }, [currency, rate]);

  const handleFavouriteClick = () => {
    // Toggle the favorite state
    setIsFavourite(!isFavourite);

    // Update favorites in local storage
    const storedFavourites = localStorage.getItem("favourites");
    let favourites = storedFavourites ? JSON.parse(storedFavourites) : [];
    if (isFavourite) {
      favourites = favourites.filter(
        (fav: { currency: string; rate: number; isFavourite: boolean }) =>
          fav.currency !== currency || fav.rate !== rate
      );
    } else {
      favourites.push({ currency, rate, isFavourite: true });
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  return (
    <>
      <div className={styles["currency-card"]}>
        <div className={styles["currency-details"]}>
          <h2 className={styles["currency-name"]}>{currency}</h2>
          <p className={styles["exchange-rate"]}>
            1 EURO ≈ {(rate).toFixed(2)} {currency}
          </p>
        </div>
        <button
          className={`${styles["currency-favorite"]} ${
            isFavourite ? styles["favorite"] : ""
          }`}
          onClick={handleFavouriteClick}
        >
          Favourite
        </button>
      </div>
    </>
  );
};

export default HomepageCurrency;