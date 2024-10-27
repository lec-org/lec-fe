import { headerNav } from '@/constants/nav'
import { Children, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import styles from './header.module.scss'

export default function Header({ children }) {
    const navigator = useNavigate()
    const [activeIndex, setActiveIndex] = useState(0)
    const onNavClick = (path: string) => {
        navigator(path)
    }
    let logoChildren = null
    let avatarChildren = null
    useEffect(() => {
        if (location.pathname === '/') {
            setActiveIndex(0)
        }
    }, [location.pathname])
    Children.map(children, (child) => {
        if (child.type === Header.Logo) {
            logoChildren = child
        }

        if (child.type === Header.Avatar) {
            avatarChildren = child
        }
    })

    return (
        <header className={styles["header"]}>
            <div className={styles["logo"]} onClick={() => onNavClick('/')}>{logoChildren}</div>
            <nav className={styles["nav"]}>
                {
                    headerNav.map((nav, index) =>
                        <span
                            className={[styles["nav-item"],
                            activeIndex === index ? styles["active"] : ''].join(' ')}
                            key={nav.label + nav.path}
                            onClick={() => { onNavClick(nav.path), setActiveIndex(index) }}>
                            {nav.label}
                        </span>)
                }
            </nav>
            <div className={styles["search"]}>
                <input type="text" placeholder="十里淘金" />
                <button type="button" className={styles["search-btn"]}>搜索</button>
            </div>
            <div className={styles["avatar"]}>{avatarChildren}</div>
        </header>
    )
}




Header.Logo = ({ children }) => <>{children}</>
Header.Avatar = ({ children }) => <>{children}</>

