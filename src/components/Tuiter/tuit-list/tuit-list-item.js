import React from "react";
import {useDispatch} from "react-redux";

const TuitListItem = ({tuit, deleteTuit, updateTuit}) => {
    const dispatch = useDispatch();

    return (
        <>
           <div className="list-group">
               <div className="list-group-item mt-2">
                   <div>
                       <div>@ {tuit._id}</div>
                       <div>{tuit.tuit}</div>
                   </div>
                   <div className='mt-2'>
                   <span>
                       <i onClick={() => updateTuit(dispatch, {...tuit, likes: tuit.likes + 1})} className="far fa-thumbs-up ms-2 me-2"/>
                        Likes: {tuit.likes}
                   </span>
                   <span className='ms-3'>
                       <i onClick={() => updateTuit(dispatch, {...tuit, dislikes: tuit.dislikes + 1})} className="far fa-thumbs-down ms-2 me-2"/>
                        Dislikes: {tuit.dislikes}
                   </span>
                   </div>

                   <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}/>
               </div>
           </div>
        </>
    );

}

export default TuitListItem;