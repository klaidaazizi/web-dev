import postItems from "./posts.js"
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
    <div> 
    <ul class="list-group">
        ${postItems.map(post => PostItem(post)).join('')}
        </ul>
        </div>
    
    `)
}

export default PostList;