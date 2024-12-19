import Layout from "@renderer/components/layout/Layout";
import { Analysis, Cards, Home, Profile, Schedule, Websites } from "@renderer/pages";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      }, {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'analysis',
        element: <Analysis />,
      },
      {
        path: 'cards',
        element: <Cards />,
      },
      {
        path: 'websites',
        element: <Websites />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ]
  }
])