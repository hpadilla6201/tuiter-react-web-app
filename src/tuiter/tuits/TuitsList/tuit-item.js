import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import TuitStats from "../TuitStats";
import {useDispatch} from "react-redux";
// import { deleteTuit } from "../../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

const TuitItem = (
 {
  tuit
 }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}

 return(
    <div className="list-group-item">
        <div className="row ">
            <div className="col-2">
                <img width={70} className="float-start rounded-3" src={`/images/${tuit.image}`} alt=""/>
            </div>
            <div className="col-10">
                <div className="row">
                    <div>
                        {tuit.userName} <FontAwesomeIcon icon={faCheck} /> 
                        <span> {tuit.handle}</span>
                        <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i> 
                    </div>
                    
                </div>
                <div className="row">
                    <p>{tuit.tuit}</p>
                </div>
                <div className="row">
                <TuitStats tuit={tuit}/>
                </div>
    </div>

  </div>
    </div>
  
 );
};
export default TuitItem;