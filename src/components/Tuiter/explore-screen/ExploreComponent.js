import React from "react";
import PostSummaryList from "../post-summary-list/PostSummaryList";
import './explore.css'

const ExploreComponent = () => {
    return(<>

             <div className="input-group mb-2 wd-input">
             <i className="fa fa-search wd-search-icon"/>
             <input type="text" className="form-control form-input rounded-pill" placeholder="       Search Twitter" style={{"right":"15px", "zIndex": "-1"}}/>
             <a href="explore-settings.html">
             <i className="fas fa-cog fa-2x text-primary position-relative mt-1" style={{"color": "white"}}/>
             </a>
            </div>
         
           <ul className="nav mb-2 mt-2 nav-tabs">
           <li className="nav-item">
           <a className="nav-link active" href="for-you.html">For You</a>
           </li>
           <li className="nav-item">
           <a className="nav-link " href="trending.html">Trending</a>
           </li>
           <li className="nav-item">
           <a className="nav-link " href="news.html">News</a></li>
           <li className="nav-item">
           <a className="nav-link " href="Sports.html">Sports</a></li>
           <li className="nav-item">
           <a className="nav-link" href="Entertainment.html">Entertainment</a></li>
                       
           </ul>
           <div className="card">
           <div className="wd-img-container">
           <img src="../images/starship.jpg" className="wd-img"/>
           <div className="wd-caption position-absolute bottom-0 ms-2"><b>SpaceX's Starship</b></div>
           </div>
           </div>
           {<PostSummaryList/>}

    </>
    );
}
export default ExploreComponent;