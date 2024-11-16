import { subNavRoutes } from "@/constants/route";

import styles from "./side-nav.module.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideNav() {
  const navigator = useNavigate()

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <nav className={styles["side-navigation-wrap"]}>
      {
        subNavRoutes.map((route, index) => (
        <div 
          key={index + route.path + route.label}
          className={styles["nav-item-wrap"]}
        >
          <div 
            className={[styles["nav-item-content"], activeIndex === index? styles["active"] : ""].join(" ")}
            onClick={() => setActiveIndex(index)}
            >
            <div 
              className={styles['nav-item']}
              onClick={() => navigator(route.path)} 
            >
              <div className={styles["icon"]}></div>
              <div className={styles["nav-item-text"]}>{route.label}</div>
            </div>
          </div>
        </div>))
      }
    </nav>
  )
}
