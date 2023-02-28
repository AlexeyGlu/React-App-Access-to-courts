import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import './index.css';


ReactDOMClient.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


