import { posts } from "./post";

export const Post = (props) => {
  const post = props.p;
  console.log(post);
  console.log(post.categories);
  return (
    <div className="border border-black mb-4 w-4/5 mx-auto">
      <div className="p-5">
        <div className="flex justify-between">
          <p className="">{new Date(post.createdAt).toLocaleDateString()}</p>
          <div className="flex">
            {/* post.categoriesが存在し、かつ配列である場合 */}
            {posts.categories &&
              Array.isArray(post.categories) && // カテゴリーをループして表示
              post.categories.map((category, i) => (
                <p
                  key={i}
                  className="border border-blue-500 rounded text-blue-500 p-1"
                >
                  {category}
                </p>
              ))}
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="line-clamp-2"
        />
      </div>
    </div>
  );
};

// line-clamp-2 ２行目から省略する
