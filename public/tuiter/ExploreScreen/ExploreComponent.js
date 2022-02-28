import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="col-8 col-sm-10 col-lg-6">
             <div class="input-group mb-2 wd-input">
             <i class="fa fa-search wd-search-icon"></i>
             <input type="text" class="form-control form-input" placeholder="       Search Twitter" style="border-radius:45px; position:relative; right:15px; z-index: -1;">
             <a href="explore-settings.html">
             <i class="fas fa-cog fa-2x text-primary position-relative mt-1" style="color: white"></i>
             </a>
        
             </div>
         
           <ul class="nav mb-2 mt-2 nav-tabs">
                      <!-- tabs -->
           <li class="nav-item">
           <a class="nav-link active" href="for-you.html">For You</a>
           </li>
           <li class="nav-item">
           <a class="nav-link " href="trending.html">Trending</a>
           </li>
           <li class="nav-item">
           <a class="nav-link " href="news.html">News</a></li>
           <li class="nav-item">
           <a class="nav-link " href="Sports.html">Sports</a></li>
           <li class="nav-item">
           <a class="nav-link" href="Entertainment.html">Entertainment</a></li>
                       
           </ul>
           <div class="card">
           <div class="wd-img-container">
           <img src="../images/starship.jpg" class="wd-img">
           <div class="wd-caption position-absolute bottom-0 ms-2"><b>SpaceX's Starship</b></div>
           </div>
           </div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;