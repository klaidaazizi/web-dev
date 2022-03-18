import React from "react";
const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
) => {
    return(
        <>
    <img className="rounded-circle float-start" width = "48" src={who.avatarIcon}/>

    <div className="ms-2 me-auto">
    <div className="fw-bold">@{who.userName}
    <i className="fas fa-check-circle"/></div>

    <div className="text-muted">@{who.handle}</div>
    </div>

   <button className="btn btn-primary rounded-pill wd-follow-btn fw-bold">
    Follow
    </button>
</>
    );
}

export default WhoToFollowListItem;