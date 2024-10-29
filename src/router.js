import {createBrowserRouter} from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Service from "./pages/Service/Service";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "services/:id",
        element: <Service/>,
    },
    {
        path: "work",
        element: <Work/>,
    },
]);

export default router;
