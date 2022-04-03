import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/Labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/explore-screen/ExploreScreen";
import Tuiter from "./components/Tuiter";
import ProfileScreen from "./components/Tuiter/ProfileScreen";
import EditProfileScreen from "./components/Tuiter/ProfileScreen/EditProfileScreen";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<HelloWorld/>}/>
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               exact={true}
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               exact={true}
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="profile/editprofile"
                                   element={<EditProfileScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;