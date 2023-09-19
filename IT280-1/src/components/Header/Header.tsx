import styles from "./Header.module.css";
import myImage from "../../../public/icon-logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/favourites");
  };

  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.image}
          src={myImage}
          alt="My Logo"
          onClick={() => navigate("/")}
          data-testid="logo"
        />
      </div>
      <button className={styles.button} onClick={handleButtonClick} data-testid="Favourites-button">
        Favourites
      </button>
    </div>
  );
}
