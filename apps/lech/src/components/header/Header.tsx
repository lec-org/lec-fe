import { headerNav } from '@/constants/nav'
import { Children } from "react"
import { useNavigate } from "react-router-dom"

import styles from './header.module.scss'

export default function Header({ children }) {
    const navigator = useNavigate()
    const onNavClick = (path: string) => {
        navigator(path)
    }
    let logoChildren = null
    let avatarChildren = null

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
            <div className={styles["logo"]}>{logoChildren}</div>
            <nav className="nav">
                {
                    headerNav.map((nav) =>
                        <span
                            className={styles["nav-item"]}
                            key={nav.label + nav.path}
                            onClick={() => onNavClick(nav.path)}>
                            {nav.label}
                        </span>)
                }
            </nav>
            <div className={styles["avatar"]}>{avatarChildren}</div>
        </header>
    )
}




Header.Logo = ({ children }) => <>{children}</>
Header.Avatar = ({ children }) => <>{children}</>

