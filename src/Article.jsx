import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "./post";

function Article() {
  const { id } = useParams();
  const article = posts.find((article) => article.id === parseInt(id));

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
