import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';


const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

      useEffect(() => {
        fetch("api/GetBlogItems")
          .then((res) => {
            console.log(res)
            return res.json()
        })
          .then(
            (result) => {
              setBlogPosts(result);
              console.log(result);
            }
          );
      }, []);

return (
        <div className="container">
            <div className="a-list-grid">
                {blogPosts.map((blogPost) => (
                    <BlogItem key={blogPost.Rowkey} blogPost={blogPost}/>
                ))}
            </div>
        </div>
    );
};

export default BlogList;