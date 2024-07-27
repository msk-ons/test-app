export const Post = (props) => {
  const post = props.p;
  return (
    <div className="border border-black mb-4">
      <div className="flex">
        <span className="">{post.createdAt}</span>
        <span className="border-blue-500">{post.categories}</span>
      </div>
      <h2 className="font-bold text-lg">{post.title}</h2>
      <p className="line-clamp-2">{post.content}</p>
    </div>
  );
};

// line-clamp-2 ２行目から省略する
