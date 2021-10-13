import React from 'react';



const BlogItem = ({blogPosts}) => {

    return (
        <div className="a-comp-holder">
            <div className="a-comp-card card">
                <div className="a-card-container">
                    <h3>{blogPosts.Title}</h3>
                    <p>{blogPosts.Content}</p> 
                </div>
            </div>
        </div>
    );
};

export default BlogItem;