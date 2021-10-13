import React from 'react';

const BlogItem = ({blogPost}) => {

    return (
        <div className="a-comp-holder">
            <div className="a-comp-card card">
                <div className="a-card-container">

                    <h3>{blogPost.title}</h3>
                    <p>{blogPost.blogtext}</p>

                </div>
            </div>
        </div>
    );
};

export default BlogItem;
