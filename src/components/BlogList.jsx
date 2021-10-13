import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';


const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await fetch('')
            const data = await result.json()
            setBlogPosts(data);
          })()
      }, []);

return (
        <div className="container">
            <div className="a-list-grid">
                {}
                <BlogItem blogPosts={blogPosts}/>

            </div>
        </div>
    );
};

export default BlogList;