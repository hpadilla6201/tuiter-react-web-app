import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";
import { getTuits } from "../reducers/tuits-reducer";

const PostSummaryList = () => {
 const postsArray = useSelector(getTuits)
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;