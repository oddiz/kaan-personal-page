import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export default function NextIndexWrapper() {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
