import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="col-8 col-sm-10 col-lg-6">
             <div class="wd-searchbar">
             <i class="fas fa-search" style="color: white"></i>
             <input type="text" class="pt-2 ps-4 pb-2" placeholder="Search Twitter">
             <i class="fas fa-cog fa-2x position-absolute mt-1 ms-3" style="color: white"></i>
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