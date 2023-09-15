import React, { useState } from "react";
// import styles from "./Currency.module.css";
import styles from "./HomepageCurrency.module.css";

interface CurrencyProps {
  currency: string;
  rate: number;
  favourite: boolean;
}

const Currency: React.FC<CurrencyProps> = ({ currency, rate, favourite }) => {
  const [isFavourite, setIsFavourite] = useState(favourite);

  const handleFavouriteClick = () => {
    setIsFavourite(!isFavourite);
    console.log("Is Favourite: ", isFavourite);
  };

  return (
    <>
      <div className={styles["currency-card"]}>
        <div className={styles["currency-details"]}>
          <h2 className={styles["currency-name"]}>{currency}</h2>
          <p className={styles["exchange-rate"]}>
            {" "}
            1 EURO ≈ {rate.toFixed(2)} {currency}
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

export default Currency;
