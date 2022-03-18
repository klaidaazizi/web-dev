import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/Labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/home-screen/HomeScreen";
import ExploreScreen from "./components/Tuiter/explore-screen/ExploreScreen";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
          <Route path="/tuiter/home" element={<HomeScreen/>}/>
          <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
          <Route path="/hello"
                 exact={true}
                 element={<HelloWorld/>}/>
          <Route path="/"
                 exact={true}
                 element={<Labs/>}/>
          <Route path="/tuiter"
                 exact={true}
                 element={<HomeScreen/>}/>
      </Routes>

      </div>
      </BrowserRouter>
  );
}

export default App;