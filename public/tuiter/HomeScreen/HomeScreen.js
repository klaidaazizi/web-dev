import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        
        <div class="mt-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            ${NavigationSidebar()}
        </div>
        
        <div class="mt-2 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
        ${HomeComponent()}
        </div>
        
        <div class="mt-2 d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4 col-xxl-4">
            ${PostSummaryList()}
        </div>
        
        </div>
        
    `);
})($);