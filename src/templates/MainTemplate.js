import React from "react";
import styles from "./MainTemplate.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainTemplate;
