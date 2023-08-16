import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts,
            { title: `Blog Post #${blogPosts.length + 1}` },
        ]);
    };

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost, test: 4 }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
