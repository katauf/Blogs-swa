import React from 'react';
import moment from "moment/min/moment-with-locales";

const BlogItem = ({blogPost}) => {

    return (
        <div className="mt-4 p-2">
            <h3 className="text-success">{blogPost.title}</h3>
            <p>{blogPost.blogtext}</p>
            <p>{moment(blogPost.PostDate).locale("sv").calendar()}</p>
        </div>
    );
};

export default BlogItem;
