import React from "react";
import { posts } from "./post";
import { MainPost } from "./MainPost";
import { PageTitle } from "./PageTitle";

export const Posts = () => {
  return (
    <div className="mx-auto w-4/5">
      <PageTitle ttl="記事一覧" />
      {posts.map((post) => {
        return <MainPost key={post.id} post={post} />;
      })}
    </div>
  );
};
