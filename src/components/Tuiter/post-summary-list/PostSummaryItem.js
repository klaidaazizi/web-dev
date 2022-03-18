import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "/tuiter/images/react-blue.png"
        }
    }
) =>{
    return(<>
    <div>
    <div className="text-muted"> {post.topic} </div>
    
    <div className="fw-bold">
    {post.userName}
    <i className="fa fa-check-circle"/>
    <span className="text-muted"> - {post.time} </span> </div>
    
    <div className="fw-bold pb-2">
        <p>{post.title}</p>
    </div>
   </div>

    <img src={post.image} className="me-3 mt-1 mb-2 wd-img-trending"/>

    </>);
}

export default PostSummaryItem;