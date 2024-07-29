import { posts } from "./post";

export const Post = (props) => {
  const post = props.p;
  return (
    <div className="border border-black mb-4 w-4/5 mx-auto">
      <div className="p-5">
        <div className="flex justify-between">
          <p className="">{post.createdAt}</p>
          <div className="flex">
            {
              // post.categoriesが存在し、かつ配列である場合
              posts.categories && Array.isArray(posts.categories){ // カテゴリーをループして表示
                  posts.categories.map((category, i) => (
                    <p
                      key={i}
                      className="border border-blue-500 rounded text-blue-500 p-1"
                    >
                      {category}
                    </p>
                  ))
                } // カテゴリーが存在しない場合は何も表示しない
                  null
            }
          </div>
        </div>
        <h2 className="font-bold text-lg">{post.title}</h2>
        <p className="line-clamp-2">{post.content}</p>
      </div>
    </div>
  );
};

// line-clamp-2 ２行目から省略する
