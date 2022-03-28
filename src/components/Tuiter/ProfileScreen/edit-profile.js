import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const EditProfile = () => {
    const prof = useSelector((state) => state.profile);

    let[profile, setProfile] = useState(prof[0]);

    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch({type: 'save-profile',
        profile: profile});
    }

    return(
        <>
            <div className="row ">
                <div className="col-2"><i  className={"fa-solid fa-arrow-left mt-1"}/> </div>
                <div className="col-8">
                    <h5 className="fw-bold">Edit Profile</h5>
                </div>
                <button className="col-2 btn btn-outline-dark rounded-pill mb-1 " onClick={saveProfile}>
                    <Link to="/tuiter/profile"> Save</Link>
                </button>
            </div>
            <div className="position-relative">
                <img src={profile.bannerPicture} className="wd-banner-pic" alt={""}/>
                <img src={profile.profilePicture} alt='' className="wd-profile-pic"/>
            </div>
            <div className="row ms-2 mt-5 col-11 mb-2">
                <label htmlFor='fName' className='control-label'>
                    Name
                </label>
                <input  id ="fName" className="bg-black border-1" style={{"background-color": "grey", "color": "white"}} value={profile.firstName} onChange={(event) => setProfile({
    ...profile,
    firstName: event.target.value
})}/>
            </div>

            <div className="row ms-2 pe-0 mt-4 col-11">
                <p className="ps-0 mb-0 pt-0 ms-2">Bio</p>
                <input className="bg-black border-1" style={{"background-color": "grey", "color": "white"}} value={profile.bio} onChange={(event) => setProfile({
    ...profile,
    bio: event.target.value
})}/>
            </div>

            <div className="row ms-2 pe-0 mt-4 col-11">
                <p className="ps-0 mb-0 pt-0 ms-2">Location</p>
                <input className="bg-black border-1" style={{"background-color": "grey", "color": "white"}} value={profile.location} onChange={(event) => setProfile({
    ...profile,
    location: event.target.value
})}/>
            </div>

            <div className="row ms-2 pe-0 mt-4 col-11">
                <p className="ps-0 mb-0 pt-0 ms-2">Website</p>
                <input className="bg-black border-1" style={{"background-color": "grey", "color": "white"}} value={profile.website} onChange={(event) => setProfile({
                    ...profile,
                    website: event.target.value
                })}/>
            </div>

            <div className="row ms-2 pe-0 mt-4 col-11">
                <p className="ps-0 mb-0 pt-0 ms-2">Birthday</p>
                <input className="bg-black border-1" style={{"background-color": "grey", "color": "white"}} value={profile.dateOfBirth} onChange={(event) => setProfile({
                    ...profile,
                    dateOfBirth: event.target.value
                })}/>
            </div>

        </>
    );
}

export default EditProfile;