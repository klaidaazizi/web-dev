const PostSummaryItem = (post) =>{
    return(`
    <li class="list-group-item wd-bg-color-black">
    <div class="row">
    
    <div class="col-9">
    
    <div class="wd-trending"> ${post.topic} </div>
    
    <div class="wd-creator">
    <b>${post.userName}</b>
    <i class="fa fa-check-circle"></i>
    <span class="wd-timestamp"> - ${post.time} </span> </div>
    
    <div class="wd-topic pb-2">
    ${post.title}
    </div>
   </div>
    
    <div class="col-3">
    <img src=${post.image} class="me-4 mt-1 mb-2 wd-img-trending"/>
    </div></div>
    </li>
    `);
}

export default PostSummaryItem;