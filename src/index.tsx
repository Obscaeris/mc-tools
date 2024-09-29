import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage.tsx";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import NavbarContainer from "./Components/NavbarContainer.tsx";
import Root from "./routes/Root.tsx";
import Bool from "./routes/bool.tsx";
import Toggle from "./routes/toggle.tsx";

const router = createBrowserRouter([
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

console.log(router.basename);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <link rel="stylesheet" href="/styles/tailwind.css"/>
        <ScrollToHashElement/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
