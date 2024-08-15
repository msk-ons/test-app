import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "./post";
import { Header } from "./page/Header";

function Article() {
  const { id } = useParams();
  const article = posts.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <div>
      <main>
        <div className="max-w-full w-4/5 mx-auto">
          <div className="w-full my-8">
            <img
              src={article.thumbnailUrl}
              alt={article.title}
              className="w-full"
            />
          </div>
          <div className="flex justify-between">
            <p className="text-xs">
              {new Date(article.createdAt).toLocaleDateString()}
            </p>
            <div className="flex">
              {article.categories.map((category, i) => (
                <p
                  key={i}
                  className="border border-blue-500 rounded text-blue-500 p-2 ml-1"
                >
                  {category}
                </p>
              ))}
            </div>
          </div>
          <div className="my-5">
            <h2 className="font-medium text-2xl mb-4">{article.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Article;
