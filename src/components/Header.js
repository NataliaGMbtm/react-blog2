import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.link}>
            <Link to="/">Strona główna</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about">O nas</Link>
          </li>
          <li className={styles.link}>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
