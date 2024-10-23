import { createBrowserRouter, RouteObject } from "react-router-dom";
import Talk from "../pages/talk/Talk";
import Home from "../pages/home/Home";
import Hot from "../pages/hot/Hot";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    }, {
        path: "/hot",
        element: <Hot />
    }, {
        path: '/talk/:talkTag',
        element: <Talk />
    }
]

export const router = createBrowserRouter(routes);