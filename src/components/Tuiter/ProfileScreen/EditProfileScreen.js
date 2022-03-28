import React from "react";
import EditProfile from "./edit-profile";
import profile from "../data/profile.json"
import {useSelector} from "react-redux";

const EditProfileScreen = () => {
    return(
        <>
            {
                profile.map(profile => {
                    return(
                        <EditProfile profile={profile} key={profile._id}/>
                    )
                })
            }
        </>
    )
}

export default EditProfileScreen;