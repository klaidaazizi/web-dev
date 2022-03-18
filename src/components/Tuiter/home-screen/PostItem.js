import React from "react";
import "./index.css"

const PicContent = ({post}) =>{
    return(
         <div className="card-body">
        <div className="fw-bold">
            {post.picTitle}
        </div>
             <div className="text-muted">
                 {post.picContent}
             </div>
    </div>
    )
}


const PostItem = (
    {
        post = {
            "topic": "Elon Musk",
            "userName": "@elonmusk",
            "time": "23h",
            "image": "../images/inspiration.jpeg",
            "avatar": "../images/spacex.jpeg",
            "picTitle": "Countdown: Inspiration4 Mission to Space. | Netflix official site",
            "title": "Amazing show about <a href='#'>@Inspirational4x</a> mission!",
            "picContent": "From training to launch to landing, this all access docuseries rides with with the inspiration4 crewon the first all civilian orbital space mission",
            "comments": "4.2k",
            "likes": "37.5k",
            "retweets": "3.5k"
        }
    }
) =>{
    return(
        <>
        <li className="list-group-item wd-bg-color-black">

        <div className="row">
    <div className="col-2 mt-1">
    <img src={post.avatar} className="wd-home-avatar" alt=""/>
    </div>
    <div className="col-10">

        <span className="wd-topic fw-bold"> <b>{post.topic} </b></span>
    <i className="fa fa-check-circle"/>
    <span className="wd-fg-grey wd-timestamp"> {post.userName}</span>
    <span className="wd-timestamp"> - {post.time} </span>
    <div className="wd-title">{post.title}</div>


    <div className="card wd-card-border wd-bg-color-black border-light mt-2">
        <img src={post.image} className="wd-img card-img-top" style={{"border-radius": "10px"}} alt="..."/>
    </div>
        {post.picTitle !== '' && <PicContent post={post}/>}

    
    <div className="row mt-3 mb-2 wd-fg-grey" style={{"font-size": "13px"}}>
    <div className="col-3">
    <i className="far fa-comment wd-fg-grey"/>
    <span> {post.comments}</span>
    </div>
    
    <div className="col-3">
    <i className="fa fa-retweet wd-fg-grey" />
    <span> {post.retweets}</span>
    </div>
    
    <div className="col-3">
    <i className="fa fa-heart wd-fg-grey" style={{"color": "red"}}/>
    <span> {post.likes}</span>
    </div>
    
    <div className="col-3">
    <i className="fa fa-share wd-fg-grey"/>
    </div>

    </div>
    </div>
    </div>
        </li>
            </>
    );
}

export default PostItem;