import React from "react";
import App from "./App";
import "./index.css";

export default function NextIndexWrapper() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

