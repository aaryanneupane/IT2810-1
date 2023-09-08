import MyButton from "../Button/Button";
import styles from "./Header.module.css";
import myImage from './myLogo.png';


export default function Header() {
  return( 
    <div className={styles.header}>
      <img
        className={styles.image}
        src={myImage} 
        alt="My Logo" 
      />
    
    <MyButton></MyButton>
    
    </div>
  );
}