import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuits}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuits});
    };
    return (
        <><div className="row mt-3 mb-2">
                                <div className="col-3">
                                    <i className="far fa-comment"/>
                                    <span>  {tuits.comments}</span>
                                </div>

                                <div className="col-3">
                                    <i className="fa fa-retweet"/>
                                    <span>  {tuits.retuits}</span>
                                </div>
                <div className="col-3" onClick={likeTuit}>
                    {
                    tuits.liked &&
                            <i className="fa-solid fa-heart" style={{color:tuits.liked ? 'red' : 'white'}}/>
                    }
                    {
                        !tuits.liked &&
                            <i className="fa-solid fa-heart"/>

                    }
                    <span>  {tuits.likes}</span>
                </div>
                                <div className="col-3">
                                    <i className="fa fa-share"/>
                                </div>
                </div>
            </>
);
}
export default TuitStats;