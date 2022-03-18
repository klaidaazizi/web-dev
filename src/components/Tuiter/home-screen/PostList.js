import postItems from "./posts.json"
import PostItem from "./PostItem.js";
import React from "react";

const PostList = () => {
    return (

        postItems.map((post) =>{
            return(
                <PostItem post={post} key = {post.title}/>
            )
        })
    
    );
};

export default PostList;