import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { posts } from "../fakeDb";
import Post from "../components/Post";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <MainTemplate>
      <div>
        <h2 className={styles.news}>Najnowsze posty</h2>
        <div className={styles.card}>
          {posts.map((post) => (
            <Post post={post} key={post.title} />
          ))}
        </div>
      </div>
    </MainTemplate>
  );
};

export default HomePage;
