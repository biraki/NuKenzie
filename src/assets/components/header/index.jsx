import logo from "../../images/logo.svg";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.shadow}>
      <div className={`container ${styles.container}`}>
        <img src={logo}></img>
      </div>
    </header>
  );
};
