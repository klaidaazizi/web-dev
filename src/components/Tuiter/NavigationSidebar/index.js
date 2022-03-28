import React from "react";
import {Link} from "react-router-dom"

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

    return(
        <>
            <div className="list-group">
                <Link className="list-group-item" to="/tuiter">
                    <i className="fab fa-twitter"/>
                </Link>
                <Link className={`list-group-item list-group-item-action ${active === 'Home' ? 'active': ''}`} to="/tuiter" >
                    <i className="fas fa-home"/> <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link className={`list-group-item list-group-item-action ${active === 'Explore' ? 'active': ''}`} to="/tuiter/explore">
                    <i className="fas fa-hashtag"/> <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <a className={`list-group-item list-group-item-action ${active === 'Notifications' ? 'active': ''}`}>
                    <i className="fas fa-bell"/> <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'Message' ? 'active': ''}`}>
                     <i className="fas fa-envelope"/> <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'Bookmarks' ? 'active': ''}`}>
                    <i className="fas fa-bookmark"/> <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a className={`list-group-item list-group-item-action ${active === 'Lists' ? 'active': ''}`} >
                    <i className="fas fa-list"/> <span className="d-none d-xl-inline">Lists</span>
                </a>
                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${active === 'Profile' ? 'active': ''}`} >
                    <i className="fas fa-user"/> <span className="d-none d-xl-inline">Profile</span>
                </Link>
                <a className={`list-group-item list-group-item-action ${active === 'More' ? 'active': ''}`} >
                    <i className="fas fa-circle"/> <span className="d-none d-xl-inline">More</span>
                </a>
            
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;