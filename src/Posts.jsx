import React, { useEffect, useState } from "react";
// import { posts } from "./post";
import { mainPost } from "./mainPost";
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

function Posts() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch(
      "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
    )
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="mx-auto w-4/5">
      <PageTitle ttl="記事一覧" />
      {reports.map((report) => {
        return <mainPost key={report.id} post={report} />;
      })}
    </div>
  );
}

export default Posts;
