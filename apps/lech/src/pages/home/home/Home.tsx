import { Navigate, Outlet, useLocation } from "react-router-dom"

import styles from './home.module.scss'
import RSide from "./components/riside/RSide"
import LSide from "./components/lside/LSide"
import { asideNav } from "@/constants/nav";

export default function Home() {

  const location = useLocation();

  // 检查当前路径是否恰好是 `/`
  if (location.pathname === '/') {
    return <Navigate to={asideNav[0].path} replace />;
  }

  return (
   <></>
  )
}
