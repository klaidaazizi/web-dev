import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import {combineReducers, createStore} from "redux";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import Todos from "./reducers/todos-component";
const reducers =
    combineReducers({hello, todos})
const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
        <div>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
};
export default ReduxExamples;