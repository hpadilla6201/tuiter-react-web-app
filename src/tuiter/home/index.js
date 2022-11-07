import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import TuitsList from "../tuits/TuitsList";
import WhoToFollowList from "../who-to-follow-list";
import whoReducer from "../reducers/who-reducer";
  import tuitsReducer from "../reducers/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import WhatsHappening from "./whats-happening";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});
const Home = () => {
 return(
    <Provider store={store}>
    <div className="container">
        <div className="row">
            <div className="col-3">
                <NavigationSidebar />
            </div>
            <div className="col-6">
                <h1>Home</h1>
                <WhatsHappening />
                <TuitsList />
            </div>
            <div className="col-3">
                
                <WhoToFollowList /> 
            </div>
        </div>
     </div>
    </Provider>
 );
};
export default Home;