import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
import React from "react";

const WhoToFollowList = () => {
    return (<>
            <ul className="list-group">
            <li className="list-group-item">
            <b>Who To Follow</b></li>
            {who.map((w) => {
                return (
                    <li className="list-group-item d-flex align-items-start" key={w.userName}>
                <WhoToFollowListItem who={w}/>
                </li>
                );
            })}
            </ul>
        </>);
}

export default WhoToFollowList;