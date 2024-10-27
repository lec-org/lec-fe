import { useNavigate } from "react-router-dom"

import { asideNav } from "@/constants/nav"
import styles from './lside.module.scss'
import { useState } from "react"

export default function LSide() {
  const navigator = useNavigate()

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className={styles["nav"]}>
      {
        asideNav.map((item, index) =>
          <span
            className={[styles["nav-item"], activeIndex === index ? styles["active"] : ""].join(' ')}
            key={index + item.label + item.path}
            onClick={() => { navigator(item.path), setActiveIndex(index) }}
          >
            {item.label}
          </span>)
      }
    </div>
  )
}
