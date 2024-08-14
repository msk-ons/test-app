import React from "react";
import { Link } from "react-router-dom";

export const MainPost = ({ post }) => {
  return (
    <div className="border border-black mb-4 w-4/5 mx-auto">
      <Link to={`/article/${post.id}`}>
        <div className="p-5">
          <div className="flex justify-between">
            <p>{new Date(post.createdAt).toLocaleDateString()}</p>
            <div className="flex">
              {post.categories &&
                Array.isArray(post.categories) &&
                post.categories.map((category, i) => (
                  <p
                    key={i}
                    className="border border-blue-500 rounded text-blue-500 p-2 ml-1"
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
      </Link>
    </div>
  );
};
