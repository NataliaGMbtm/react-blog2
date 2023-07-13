import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { useLocation } from "react-router-dom";
import styles from "./PostPage.module.css";

const PostPage = () => {
  //const { title } = useParams();
  //console.log(title);

  const {
    state: { post },
  } = useLocation();
  console.log(post);

  return (
    <MainTemplate>
      <div>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.info}>
          <div className={styles.author}>
            <img
              className={styles.face}
              src={`https://i.pravatar.cc/50?img=${post.authorImg}`}
              alt=""
            />
            <p className={styles.name}>Autor: {post.author}</p>
          </div>
          <p className={styles.category}>#{post.category}</p>
        </div>
        <img
          className={styles.img}
          src={`https://picsum.photos/id/${post.postImg}/200/300`}
          alt=""
        />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <p className={styles.id}>ID: {post.id}</p>
    </MainTemplate>
  );
};

export default PostPage;
