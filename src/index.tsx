
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./Components/ErrorPage";
import NavbarContainer from "./Components/NavbarContainer";
import Root from "./routes/Root";
import Bool from "./routes/bool";
import Toggle from "./routes/toggle";
import {root_url} from "./Globals/GlobalVariables";

const router = createBrowserRouter([
    {
        path: root_url,
        element: <NavbarContainer element={<Root />} />,
        errorElement: <ErrorPage />
    },
    {
        path: root_url + "/bool-cmd",
        element: <NavbarContainer element={<Bool />} />,
        errorElement: <ErrorPage />
    },
    {
        path: root_url + "/toggle-cmd",
        element: <NavbarContainer element={<Toggle />} />,
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <link rel="stylesheet" href="./styles/tailwind.css"/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
