import React from "react";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigation = useNavigate();

  const handleNavigate = () => {
    navigation(`/blog/${post.slug}`, { state: { post: post } });
  }; //slug-przyjazny dla URL link

  const shortDesc =
    post.short.length > 80 ? post.short.slice(0, 80) + "..." : post.short;

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={`https://picsum.photos/id/${post.postImg}/200/300`}
        alt=""
      />
      <p className={styles.category}>#{post.category}</p>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.short}>{shortDesc}</p>
      <button
        className={styles.button}
        onClick={() => handleNavigate(post)}
        key={post.title}
      >
        Więcej
      </button>
      <div className={styles.author}>
        <img
          className={styles.face}
          src={`https://i.pravatar.cc/50?img=${post.authorImg}`}
          alt=""
        />
        <p className={styles.name}>Autor: {post.author}</p>
      </div>
    </div>
  );
};

export default Post;
