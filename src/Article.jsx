import React from "react";
import { useParams } from "react-router-dom";
import {posts} from "./post";

function Article() {
  const { post.id } = useParams();

  const articles = {posts};

  const article = articles.find((article) => post.id === parseInt(id));
  if (!article) {
    return <p>記事が見つかりませんでした。</p>;
  }
  return (
    <div>
      <header>
        <h1>{article.title}</h1>
      </header>
      <main>
        <p>{article.content}</p>
      </main>
    </div>
  );
}

export default Article;
