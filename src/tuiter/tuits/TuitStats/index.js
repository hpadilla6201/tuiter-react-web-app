import { faComment, faRetweet, faShareNodes, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = (
    {
    tuit   
    }
) => {
 const dispatch = useDispatch();
 return(
   
   <div className="row">
        <div className="col-3">
            <FontAwesomeIcon icon={faComment} />
            <span> {tuit.replies}</span>
        </div>
         <div className="col-3">
            <FontAwesomeIcon icon={faRetweet} />
            <span> {tuit.retuits}</span>
        </div>
        <div className="col-3">
            {/* {tuit.liked === true ? <FontAwesomeIcon icon={faHeart} color="red" /> : <FontAwesomeIcon icon={faHeart}  />} */}
            
            Likes: {tuit.likes}
            <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}
            className="bi bi-heart-fill me-2 text-danger"></i>

            Dislikes: {tuit.disliked}
            <FontAwesomeIcon icon={faThumbsDown}  onClick={() => dispatch(updateTuitThunk({...tuit, disliked: tuit.disliked - 1}))}/>
            
        </div>
        <div className="col-3">
            <FontAwesomeIcon icon={faShareNodes} />
        </div>
   </div>
 );
};
export default TuitStats;