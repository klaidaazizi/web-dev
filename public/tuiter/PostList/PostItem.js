const PostItem = (post) =>{
    return(`
    <li class="list-group-item wd-bg-color-black">
    <div class="row">
    <div class="col-2 mt-1">
    <img src=${post.avatar} class="wd-home-avatar"/>
    </div>
    <div class="col-10">
    <p>
    <span class="wd-topic -bold"> <b>${post.topic}</b> 
    <i class="fa fa-check-circle"></i>
    <span class="wd-fg-grey">${post.userName}</span> 
    <span class="wd-timestamp"> - ${post.time} </span>
    </br>
    ${post.title}
    </p>
    <div class="card wd-card-border wd-bg-color-black border-light mt-2">
    ${post.picTitle && post.picContent ?
        `
        <img src=${post.image} class="wd-img card-img-top" style="border-radius: 10px" alt="..."/>
        <div class="card-body">
        ${post.picTitle ? `<h5 class="wd-topic">${post.picTitle}</h5> ` : ""}
        ${post.picContent ? `<h5 class="wd-trending">${post.picContent}</h5> ` : ""}
        </div>` : `<img src = ${post.image} class="wd-img card-img-top" style="border-radius: 10px" alt="..."/>`
    }
    </div>
    
    <div class="row mt-3 mb-2 wd-fg-grey" style="font-size: 13px;">
    <div class="col-3">
    <i class="far fa-comment wd-fg-grey"></i>
    <span>${post.comments}</span>
    </div>
    
    <div class="col-3">
    <i class="fa fa-retweet wd-fg-grey" ></i>
    <span>${post.retweets}</span>
    </div>
    
    <div class="col-3">
    <i class="fa fa-heart wd-fg-grey" style=" color: red"></i>
    <span>${post.likes}</span>
    </div>
    
    <div class="col-3">
    <i class="fa fa-share wd-fg-grey"></i>
    <span>${post.comments}</span>
    </div>
    </div>
    </div>
        </div>
        </li>
    `);
}

export default PostItem;