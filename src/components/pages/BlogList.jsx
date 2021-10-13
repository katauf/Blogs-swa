import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';


const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

      useEffect(() => {

        fetch("api/GetBlogItems")
          .then(response => response.json())
          .then(json => {
            setBlogPosts(json)
          });
          
      }, []);

return (
        <div className="container">
            <div className="a-list-grid">
                {blogPosts.map((blogPost) => (
                    <BlogItem key={blogPost.Rowkey} blogPost={blogPost}/>
                ))}
            </div>
        </div>
    )
}

export default BlogList;