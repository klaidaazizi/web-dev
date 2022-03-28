import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../../TuitStats/tuit-stats";
// import {useDispatch} from "react-redux";

const TuitListItem = ({tuits}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuits) => {
        dispatch({type: 'delete-tuit', tuits})
    };

    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={tuits.avatar} alt="avatar"
                             className="img-fluid rounded-circle"/>
                    </div>

                    <div className="col-10">
                        <div>
                            <p className="m-0 fw-bold">{tuits.username} <i className="fa fa-check-circle"/> <span
                                className="fw-light wd-fg-grey">@{tuits.handle}
                                <i onClick={() => deleteTuit(tuits)} className="fa-solid fa-xmark
                  fa-pull-right"/>
                            </span>
                            </p>
                            <p className="m-0 fs-6">{tuits.tuit}</p>
                        </div>
                        
                        <div className="row mt-2 m-0 p-0">
                            {
                                tuits.attachments && tuits.attachments.video &&
                                <iframe className="p-0 m-0" width="560" height="236"
                                        src={tuits.attachments.video}>
                                </iframe>
                            }
                            {
                                tuits.attachments && tuits.attachments.image &&
                                <img src={tuits.attachments.image}
                                     className="m-0 p-0"/>
                            }
                        </div>

                        <TuitStats tuits={tuits}/>

                        </div>
                    </div>

            </li>
        </>
    );

}

export default TuitListItem;