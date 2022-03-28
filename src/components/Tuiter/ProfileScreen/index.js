import { useState } from 'react';
import { useSelector } from 'react-redux';
import EditProfile from './edit-profile';
import Profile from './profile';

const ProfileScreen =() => {
    const profile = useSelector((state) => state.profile)

    return(
        <>
            {
                profile.map(profile => {
                    return(
                        <Profile profile={profile} key={profile._id}/>
                    )
                })
            }
        </>
    );
};
export default ProfileScreen;