import exploreItems from "./posts.json"
import PostSummaryItem from "./PostSummaryItem";
import React from "react";

const PostSummaryList = () => {
    return (
    <div> 
    <ul class="list-group">
        {exploreItems.map((post) =>{
        return(
            <li className="list-group-item d-flex justify-content-between align-items-center text-white" key={post.userName}>
            <PostSummaryItem post={post}/>
            </li>)
        })}
        </ul>
        </div>
    
    )
}

export default PostSummaryList;