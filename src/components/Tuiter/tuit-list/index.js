import React from "react";
// import tuits from "../data/tuits.json";
import TuitListItem
    from "./tuit-list-item";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector(
        (state) => state.tuits);
    return (
        <>
            {
            tuits.map(tuit => {
                return (
                    <TuitListItem key={tuit._id}
                                  tuits={tuit}/>);
            })
        }
        </>
    )
}

export default TuitList;