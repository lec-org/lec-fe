import { NotFound } from "@/pages"
import { Algorithm, Backend, Follow, Frontend, Recommended } from "@/pages/home"
import Root from "@/Root"
import { createBrowserRouter, RouteObject } from "react-router-dom"

const routes: RouteObject[] = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "post",
          element: <div>Post</div>, // 投递的文章详情页，打开方式为_blank
        }, {
          path: 'follow',
          element: <Follow />
        }, {
          path: 'recommended',
          element: <Recommended />
        }, {
          path: 'frontend',
          element: <Frontend />
        }, {
          path: 'backend',
          element: <Backend />
        }, {
          path: 'algorithm',
          element: <Algorithm />
        }
      ],
    },
    { path: '*', element: <NotFound /> },
]

export const router = createBrowserRouter(routes)