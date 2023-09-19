import styles from "./Header.module.css";
import myImage from "/icon-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.image}
          src={myImage}
          alt="My Logo"
          onClick={() => navigate("/")}
        />
      </div>
      {location.pathname !== "/favourites" && (
        <button
          className={styles.button}
          onClick={() => navigate("favourites")}
        >
          Favourites
        </button>
      )}
    </div>
  );
}
