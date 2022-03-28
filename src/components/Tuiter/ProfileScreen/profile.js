import "./index.css";
import {Link} from "react-router-dom";

const Profile = ({profile}) => {
    return(
        <>
        <div className="row">
            <div className="col-2"><i className={"fa-solid fa-arrow-left mt-1"}/> </div>
            <div className="col-10">
                <h5 className="fw-bold">{profile.name}</h5>
            </div>
        </div>
        <div className="position-relative">
                <img src={profile.bannerPicture} className="wd-banner-pic" alt={""}/>
                <img src={profile.profilePicture} alt='' className="wd-profile-pic"/>
            </div>
            <button
                type='button'
                className='btn btn-outline-dark position-relative fw-bold float-end rounded-pill mt-2 me-2'>
                <Link to="/tuiter/profile/editprofile"> Edit Profile</Link>
            </button>
        <div className="row mt-5 ms-2">
            <h5 className="fw-bold mb-0">{profile.firstName}</h5>
            <h6 className="mt-0 text-muted">@{profile.handle}</h6>
            <h6 className="mt-1">{profile.bio}</h6>
        </div>
            <div className="text-muted">
                <span><i className='fa fa-location-dot ms-1 me-1'/>
                    {profile.location}</span>
                <span><i className='fa fa-cake-candles ms-4 me-1'/>
                 Born {profile.dateOfBirth}</span>
                <span><i className='fa fa-calendar-days me-1 ms-4'/>
                    Joined {profile.dateJoined}</span>
            </div>

            <div className="mt-2 ms-2">
                <span className="fw-bold">{profile.followingCount}</span>
                <span className="text-muted"> Following</span>

                <span className="fw-bold ms-4">{profile.followersCount}</span>
                <span className="text-muted"> Followers</span>
            </div>

        </>
    );
}

export default Profile;