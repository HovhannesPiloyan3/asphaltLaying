import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";  // Импортируем маршруты

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;