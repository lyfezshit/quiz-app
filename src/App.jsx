
import React from "react";
import Home from "./page/Home";
import Quiz from "./page/Quiz";
import Navbar from "./page/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<><Navbar/><Home/></>
        },
        { 
            path: "/quiz",
            element:<><Navbar/><Quiz/></>
        },
    ])
    
    return <>
       
        <RouterProvider router={router} />
        <Footer></Footer>
      
    </>
}
export default App;