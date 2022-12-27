import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react";
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";

const store = createStore(counterReducer);
console.log(store)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("root")
);
