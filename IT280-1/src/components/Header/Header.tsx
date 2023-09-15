import styles from "./Header.module.css";
import myImage from "./myLogo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/favourites");
  };

  return (
    <div className={styles.header}>
      <img
        className={styles.image}
        src={myImage}
        alt="My Logo"
        onClick={() => navigate("/")}
      />

      <button className={styles.button} onClick={handleButtonClick}>
        Favourites
      </button>
    </div>
  );
}
