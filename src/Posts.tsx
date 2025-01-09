import { useEffect, useState } from "react";
import { MainPost } from "./MainPost";
import { PageTitle } from "./PageTitle";

interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
}

export function PostPage() {
  const [postPages, setPostPages] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        const data = await response.json();
        setPostPages(data.posts);
      } catch (error) {
        console.error("Error fetching postPages:", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="mx-auto w-4/5">
      <PageTitle ttl="記事一覧" />
      {postPages.map((postPage) => (
        <MainPost key={postPage.id} post={postPage} />
      ))}
    </div>
  );
}
