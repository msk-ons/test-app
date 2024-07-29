import { posts } from "./post";
import { Post } from "./Post";
import { PageTitle } from "./PageTitle";

export const Posts = () => {
  return (
    <div className="mx-auto">
      <PageTitle text="記事一覧" />
      {posts.map((post) => {
        return <Post p={post} />;
      })}
    </div>
  );
};
