import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

const ArticleList = ({posts}) => (
    <main>
        {blogData.posts.map((post, index) => (
            <Article key={index} title={post.title} date={post.date} preview={post.preview} />
        ))}
    </main>
);

export default ArticleList;