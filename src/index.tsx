
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./Components/ErrorPage";
import NavbarContainer from "./Components/NavbarContainer";
import Root from "./routes/Root";
import Bool from "./routes/bool";
import Toggle from "./routes/toggle";

const router = createHashRouter([
    {
        path: "/",
        element: <NavbarContainer element={<Root />} />,
        errorElement: <ErrorPage />
    },
    {
        path: "/bool-cmd",
        element: <NavbarContainer element={<Bool />} />,
        errorElement: <ErrorPage />
    },
    {
        path: "/toggle-cmd",
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
