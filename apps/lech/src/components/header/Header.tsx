import { headerNavRoutes } from '@/constants/route'
import styles from './header.module.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Search } from '@/components'
export default function Header() {
  const navigator = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <header className={styles['main-header']}>
      <div className={styles["container"]}>
        <div className={styles["logo"]}>
          <div className={styles["logo-content"]}>YJY</div>
        </div>
        <nav role='navigation' className={styles['main-nav']}>
          <ul className={styles["nav-list"]}>
            <div className={styles["main-nav-list"]}>
              {
                headerNavRoutes.map((route, index)=>(
                  <li 
                     className={[styles['nav-item'], activeIndex === index? styles['active'] : ''].join(' ')}
                     onClick={() => {
                       setActiveIndex(index)
                       navigator(route.path)
                     }}
                  >
                    <div className={styles["nav-item-text"]}>
                      {route.label}
                    </div>
                  </li>
                ))
              }
            </div>
            <ul className={styles['right-side-nav']}>
              <li className={styles['search-box']}>
                <Search />
              </li>
              <li className={styles['nav-item notification']}></li>
              <li className={styles['nav-item menu']}>
                <div className={styles["avatar"]}>
                  <img src="" alt="" />
                </div>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  )
}
