import { createBrowserRouter } from "react-router-dom";
import RooterLayout from "./RouterLayout";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Book from "./pages/Book";
import Login from "./pages/Login";


const router = createBrowserRouter([
    {
        path:"/",
        element: <RooterLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/genres/:genre",
                element: <Genres/>
            },
            {
                path: "/book",
                element: <Book/>
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    }
])

export default router