import post from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
function PostSummaryList() {
    return(`
    ${post.map(value => {
        return(PostSummaryItem(value));
     }).join('')
    }
    `);
 }
export default PostSummaryList;