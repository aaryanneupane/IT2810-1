import styles from "./Currency.module.css";
import * as cc from "currency-codes";

interface CurrencyProps {
  currency: string;
  rate: number;
  favourite: boolean;
  voidFunc: (currency: string) => void;
}

const Currency: React.FC<CurrencyProps> = ({
  currency,
  rate,
  favourite,
  voidFunc,
}) => {
  return (
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
          favourite ? styles["favorite"] : ""
        }`}
        onClick={() => voidFunc(currency)}
      >
        Favourite
      </button>
    </div>
  );
};

export default Currency;
