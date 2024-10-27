import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "@/Root.tsx";
import Book from "@/pages/book/Book";
import Hot from "@/pages/hot/Hot";
import NotFound from "@/pages/NotFound";
import BookList from "@/pages/book/BookList";
import Session from "@/pages/book/Session";
import Talk from "@/pages/talk/Talk";
import { Latest, WeeklyHot, Follow, Frontend, Backend, Home } from "@/pages/home";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '', element: <Home />,
                children: [
                    { path: 'latest', element: <Latest /> },
                    { path: 'weekly', element: <WeeklyHot /> },
                    { path: 'following', element: <Follow /> },
                    { path: 'frontend', element: <Frontend /> },
                    { path: 'backend', element: <Backend /> },
                ]
            },
            { path: 'hot', element: <Hot /> },
            { path: 'book', element: <BookList /> },
            { path: 'talk', element: <Talk /> }
        ],
    },
    { path: '/book/:bid', element: <Book /> },
    { path: '/book/:bid/session/:sid', element: <Session /> },
    { path: '*', element: <NotFound /> },
]

export const router = createBrowserRouter(routes);