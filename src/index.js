import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { CookiesProvider } from "react-cookie";
import Users from "./test";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider>
        <BrowserRouter>
            {/* <Users /> */}
            <Header />
            <App />
            <Footer />
        </BrowserRouter>
    </CookiesProvider>
);
