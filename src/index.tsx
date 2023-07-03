import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStateProvider } from "./context/AppStateContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
