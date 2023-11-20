import React, { useState, useEffect } from "react";
import styles from "../styles/HomepageCurrency.module.css";
import * as cc from "currency-codes";

interface CurrencyProps {
  currency: string;
  rate: number;
  nextArrow: () => void;
  prevArrow: () => void;
}

const HomepageCurrency: React.FC<CurrencyProps> = ({
  currency,
  rate,
  nextArrow,
  prevArrow,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    // Load favorite state from local storage when the component mounts
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      const favourites = JSON.parse(storedFavourites);
      const isCurrencyFavorited = favourites.some(
        (fav: { currency: string; isFavourite: boolean }) =>
          fav.currency === currency,
      );
      setIsFavourite(isCurrencyFavorited);
    }
  }, [currency]);

  const handleFavouriteClick = () => {
    // Toggle the favorite state
    setIsFavourite(!isFavourite);
    // Update favorites in local storage
    const storedFavourites = localStorage.getItem("favourites");
    let favourites = storedFavourites ? JSON.parse(storedFavourites) : [];
    if (isFavourite) {
      favourites = favourites.filter(
        (fav: { currency: string; isFavourite: boolean }) =>
          fav.currency !== currency,
      );
    } else {
      favourites.push({ currency, isFavourite: true });
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  return (
    <>
      <div className={styles["currency-card"]}>
        <div className={styles["currency-details"]}>
          <h2 className={styles["currency-name"]}>
            {cc.code(currency)?.currency ?? currency}
          </h2>
          <p className={styles["exchange-rate"]}>
            1 EURO ≈ {rate.toFixed(2)} {currency}
          </p>
        </div>
        <button
          className={`${styles["currency-favorite"]} ${
            isFavourite ? styles["favorite"] : ""
          }`}
          data-testid="currency-favourite"
          onClick={handleFavouriteClick}
        >
          Favourite
        </button>
        <button
          className={`${styles["arrow"]} ${styles["right"]}`}
          onClick={nextArrow}
        ></button>
        <button
          className={`${styles["arrow"]} ${styles["left"]}`}
          onClick={prevArrow}
        ></button>
      </div>
    </>
  );
};

export default HomepageCurrency;
