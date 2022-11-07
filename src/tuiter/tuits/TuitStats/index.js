import { faComment, faHeart, faRetweet, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TuitStats = (
    {
    tuit   
    }
) => {
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
            {tuit.liked === true ? <FontAwesomeIcon icon={faHeart} color="red" /> : <FontAwesomeIcon icon={faHeart}  />}
            <span> {tuit.likes}</span> 
        </div>
        <div className="col-3">
            <FontAwesomeIcon icon={faShareNodes} />
        </div>
   </div>
 );
};
export default TuitStats;