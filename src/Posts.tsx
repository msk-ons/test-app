import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
}

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  // console.log("Article ID:", id);
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      // console.log("API Response:", data);
      setPost(data.post);
      setIsLoading(false);
    };

    fetcher();
  }, [id]);

  if (isLoading) return <div>読み込み中…</div>;
  if (!post) return <div>記事が存在しません。</div>;
  // if (!post) {
  //   console.log("Post is not set.");
  //   return <div>記事が存在しません。</div>;
  // } else {
  //   console.log("Post Data:", post);
  // }
  const { title, thumbnailUrl, createdAt, categories, content } = post;
  const date = new Date(createdAt);

  return (
    <>
      <article className="max-w-3xl mx-auto mt-16">
        <img src={thumbnailUrl} alt="アイキャッチ画像" />
        <div className="p-4">
          <div className="flex justify-between mb-2">
            <time
              dateTime={date.toISOString()}
              className="text-sm text-gray-400"
            >
              {date.toLocaleDateString()}
            </time>
            <ul className="flex">
              {categories.map((category) => (
                <li
                  key={category}
                  className="text-blue-600 border border-blue-600 ml-2 p-1 text-sm rounded"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-2xl mb-4">{title}</h2>
          <div>{parse(content)}</div>
        </div>
      </article>
    </>
  );
}
