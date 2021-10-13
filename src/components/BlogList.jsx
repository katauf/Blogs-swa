import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';


const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

      useEffect(() => {
        fetch("api/GetBlogItems")
          .then((res) => res.json())
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
                    <BlogItem blogPost={blogPost}/>
                ))}
            </div>
        </div>
    );
};

export default BlogList;