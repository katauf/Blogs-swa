import React from 'react';



const BlogItem = ({blogPost}) => {

    return (
        <div className="a-comp-holder">
            <div className="a-comp-card card">
                <div className="a-card-container">
                    <h3>{blogPost.Title}</h3>
                    <p>{blogPost.Blogtext}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;