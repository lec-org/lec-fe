import { Outlet, useNavigate } from 'react-router-dom'
import { sideNav } from './constants/nav'

import styles from '@/root.module.scss'
import Header from './components/header/Header'

const Root = () => {
    const navigator = useNavigate()
    return (
        <div className={styles['main-container']}>
            <Header />
            <div className={styles['content']}>
                <div className={styles['left-sider']}>
                    <div className={styles['menu']}>
                        {
                            sideNav.map((item, index) => (
                                <div key={index} className={styles['menu-item']} onClick={()=>navigator(item.path)}>
                                    <div className={styles['icon']}></div>
                                    <div className={styles['label']}>{item.label}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles['footer']}>
                        <div className={styles['theme-switch']}></div>
                    </div>
                </div>
                <div className={styles['view']}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Root