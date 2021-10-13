import React from "react";

const BlogItem = ({ blogPost }) => {
  return (
    <div className="mt-4 p-2">
      <h3 className="text-success">{blogPost.title}</h3>
      <p>{blogPost.blogtext}</p>
    </div>
  );
};

export default BlogItem;
