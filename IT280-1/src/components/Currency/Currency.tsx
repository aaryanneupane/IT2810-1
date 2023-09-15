import styles from "./Currency.module.css";

interface CurrencyProps {
  currency: string;
  rate: number;
  favourite: boolean;
  voidFunc: (currency: string) => void;
}

const Currency: React.FC<CurrencyProps> = ({ currency, rate, favourite, voidFunc }) => {
  return (
    <div className={styles["currency-card"]}>
      <div className={styles["currency-details"]}>
        <h2 className={styles["currency-name"]}>{currency}</h2>
        <p className={styles["exchange-rate"]}>Exchange Rate: {rate}</p>
      </div>
      <button
        className={`${styles["currency-favorite"]} ${
          favourite ? styles["favorite"] : ""
        }`} onClick={() => voidFunc(currency)}
      >
        Favourite
      </button>
    </div>
  );
};

export default Currency;
