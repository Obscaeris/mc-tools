import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { ErrorPage } from "./Components/ErrorPage";
import NavbarContainer from "./Components/NavbarContainer";
import Root from "./routes/Root";
import Bool from "./routes/bool";
import Toggle from "./routes/toggle";
import { root_url } from "./Globals/GlobalVariables";
const router = createBrowserRouter([
    {
        path: root_url,
        element: React.createElement(NavbarContainer, { element: React.createElement(Root, null) }),
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: root_url + "/bool-cmd",
        element: React.createElement(NavbarContainer, { element: React.createElement(Bool, null) }),
        errorElement: React.createElement(ErrorPage, null)
    },
    {
        path: root_url + "/toggle-cmd",
        element: React.createElement(NavbarContainer, { element: React.createElement(Toggle, null) }),
        errorElement: React.createElement(ErrorPage, null)
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement("link", { rel: "stylesheet", href: "./styles/tailwind.css" }),
    React.createElement(RouterProvider, { router: router })));
