import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../services/tuits-service";

const TuitListItem = ({tuit, deleteTuit}) => {
    const dispatch = useDispatch();

    return (
        <>
            {/*<li className="list-group-item">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-2">*/}
            {/*            <img src={tuit.avatar} alt="avatar"*/}
            {/*                 className="img-fluid rounded-circle"/>*/}
            {/*        </div>*/}

            {/*        <div className="col-10">*/}
            {/*            <div>*/}
            {/*                <p className="m-0 fw-bold">{tuits.username} <i className="fa fa-check-circle"/> <span*/}
            {/*                    className="fw-light wd-fg-grey">@{tuits.handle}*/}
            {/*                    <i onClick={() => deleteTuit(tuits)} className="fa-solid fa-xmark*/}
            {/*      fa-pull-right"/>*/}
            {/*                </span>*/}
            {/*                </p>*/}
            {/*                <p className="m-0 fs-6">{tuits.tuit}</p>*/}
            {/*            </div>*/}
            {/*            */}
            {/*            <div className="row mt-2 m-0 p-0">*/}
            {/*                {*/}
            {/*                    tuits.attachments && tuits.attachments.video &&*/}
            {/*                    <iframe className="p-0 m-0" width="560" height="236"*/}
            {/*                            src={tuits.attachments.video}>*/}
            {/*                    </iframe>*/}
            {/*                }*/}
            {/*                {*/}
            {/*                    tuits.attachments && tuits.attachments.image &&*/}
            {/*                    <img src={tuits.attachments.image}*/}
            {/*                         className="m-0 p-0"/>*/}
            {/*                }*/}
            {/*            </div>*/}

            {/*            <TuitStats tuits={tuits}/>*/}


           <div className="list-group">
               <div className="list-group-item">
                   <div>
                       <div>{tuit._id}</div>
                       <div>{tuit.tuit}</div>
                   </div>
                   <div>
                       <i onClick={() => updateTuit(dispatch, {
    ...tuit,
    likes: tuit.likes + 1
})} className="far fa-thumbs-up ms-2"/>
                       Likes: {tuit.likes}
                   </div>
                   <div>
                       <i onClick={() => updateTuit(dispatch, {
    ...tuit,
    dislikes: tuit.dislikes + 1
})} className="far fa-thumbs-down ms-2"/>
                       Dislikes: {tuit.dislikes}
                   </div>


                   <i className="fas fa-remove float-end"
    onClick={() => deleteTuit(
        dispatch, tuit)}/>
               </div>
           </div>
        </>
    );

}

export default TuitListItem;