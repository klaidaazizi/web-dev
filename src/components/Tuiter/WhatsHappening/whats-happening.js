import {useDispatch} from "react-redux";
import React, {useState} from "react";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div className="row">
            <div className="col-2">
                <img src="../images/emusk.png" className="img-fluid rounded-circle" alt="image"/>
            </div>
            <div className="col-9">
            <div className="row">
            <textarea className="p-2 wd-bg-color-grey border-0 border-light border-bottom"
                placeholder="What's happening?"
                      value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
            </textarea>
            </div>
                <div className="row"/>
                <div className="row mt-3 mb-3">
                    <div className="col-1 ps-0 fg-color-blue"><i className="fa fa-image" style={{color: "deepskyblue"}}/></div>
                    <div className="col-1 ps-0 fg-color-blue"><i className="fa fa-chart-bar" style={{color: "deepskyblue"}}/></div>
                    <div className="col-1 ps-0 fg-color-blue"><i className="fa fa-smile" style={{color: "deepskyblue"}}/></div>
                    <div className="col-1 ps-0 fg-color-blue"><i className="fa fa-calendar" style={{color: "deepskyblue"}}/></div>
                    <div className="col-5"/>
                    <div className="col-3">
                   <button className="btn btn-primary text-center rounded-pill" onClick={tuitClickHandler}>
                            <span className="">Tweet</span>
                        </button>
            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;