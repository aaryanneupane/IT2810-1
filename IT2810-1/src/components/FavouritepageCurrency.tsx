import styles from "../styles/FavourtitepageCurrency.module.css";
import * as cc from "currency-codes";

interface FavouritepageCurrencyProps {
  currency: string;
  rate: number;
  favourite: boolean;
  voidFunc: (currency: string) => void;
}

const FavouritepageCurrency: React.FC<FavouritepageCurrencyProps> = ({
  currency,
  rate,
  favourite,
  voidFunc,
}) => {
  return (
    <div className={styles["currency-card"]}>
      <div className={styles["currency-details"]}>
        <h2 className={styles["currency-name"]} data-testid="currency-name">
          {cc.code(currency)?.currency ?? currency}
        </h2>
        <p className={styles["exchange-rate"]} data-testid="exchange-rate">
          1 EURO ≈ {rate.toFixed(2)} {currency}
        </p>
      </div>
      <button
        className={`${styles["currency-favorite"]} ${
          favourite
            ? styles["currency-favorite-true"]
            : styles["currency-favorite-false"]
        }`}
        data-testid="currency-favorite"
        onClick={() => voidFunc(currency)}
      >
        Remove
      </button>
    </div>
  );
};

export default FavouritepageCurrency;
