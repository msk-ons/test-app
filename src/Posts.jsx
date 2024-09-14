import React, { useEffect, useState } from "react";
// import { posts } from "./post";
import { MainPost } from "./MainPost";
import { PageTitle } from "./PageTitle";

// export const Posts = () => {
//   return (
//     <div className="mx-auto w-4/5">
//       <PageTitle ttl="記事一覧" />
//       {posts.map((post) => {
//         return <MainPost key={post.id} post={post} />;
//       })}
//     </div>
//   );
// };

export function Posts() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        const data = await response.json();
        setArticles(data.posts);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mx-auto w-4/5">
      <PageTitle ttl="記事一覧" />
      {articles.map((article) => (
        <MainPost key={article.id} post={article} />
      ))}
    </div>
  );
}
