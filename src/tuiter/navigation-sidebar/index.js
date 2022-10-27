import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons'
const NavigationSidebar = (
    {
      active = 'explore'
    }
   ) => {
    return (
    <div className="list-group">
        <a className="list-group-item" href="./index.js">Tuiter</a>
        <a className={`list-group-item ${active === 'home'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faHome} />
            <span> Home</span>
        </a>
        <a className={`list-group-item ${active === 'explore'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faHashtag} />
            <span> Explore</span>
        </a>
        <a className={`list-group-item ${active === 'notifications'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faBell} />
            <span> Notifications</span>
        </a>
        <a className={`list-group-item ${active === 'messages'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faEnvelope}/>
            <span> Messages</span>
        </a>
        <a className={`list-group-item ${active === 'bookmarks'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faBookmark}/>
            <span> Bookmarks</span>
        </a>
        <a className={`list-group-item ${active === 'lists'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faList} />
            <span> Lists</span>
        </a>
        <a className={`list-group-item ${active === 'profile'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faUser} />
            <span> Profile</span>
        </a>
        <a className={`list-group-item ${active === 'more'?'active':''}`} href="./index.js">
            <FontAwesomeIcon icon={faEllipsis} />
            <span> More</span>
        </a>
    </div>

    );
   };
   export default NavigationSidebar;