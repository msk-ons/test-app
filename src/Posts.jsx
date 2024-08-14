import { posts } from "./post";
import { mainPost } from "./mainPost";
import { PageTitle } from "./PageTitle";

export const Posts = () => {
  return (
    <div className="mx-auto">
      <PageTitle text="記事一覧" />
      {posts.map((post) => {
        return <mainPost p={post} />;
      })}
    </div>
  );
};
