import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import TuitListItem
    from "./tuit-list-item";
import {createTuit, deleteTuit,findAllTuits,updateTuit} from "../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    useEffect(() =>
            findAllTuits(dispatch),
        []);

    return (
        <>
            <div>
                <button onClick={() =>
                    createTuit(dispatch, newTuit)}
                        className="btn btn-primary float-end">
                    Tuit
                </button>
                <textarea className="form-control w-75"
    onChange={(e) =>
        setNewTuit({
            ...newTuit,
            tuit: e.target.value
        })}/>
            </div>
            <ul className="list-group">
            {
            tuits.map(tuit => {
                return <TuitListItem tuit={tuit} deleteTuit={deleteTuit()} updateTuit={updateTuit()}/>;
            })
        }

            </ul>
        </>
    )
}

export default TuitList;