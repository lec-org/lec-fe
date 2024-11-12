import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles['header']}>
            <div className={styles['left-logo']}></div>
            <div className={styles['right-user-group']}>
                <div className={styles['search']}></div>
                <div className={styles['message']}></div>
                <div className={styles['avatar']}></div>
            </div>
        </header>
    )
}