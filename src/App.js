import Labs from "./Labs/index.js";
import HelloWorld from "./Labs/a6/hello-world.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./tuiter/home/index.js";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*"
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
          <Route path="/tuiter"
                 element={<Tuiter/>}/>
          <Route path="/home"
                 element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}
export default App;