import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import ToDoList from "./Todo/ToDoList";

const Labs = () => {
    return(
        <>
            <h1> Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <ToDoList/>

            </>
    )
};

export default Labs;