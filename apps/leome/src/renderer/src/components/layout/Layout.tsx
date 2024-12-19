import { motion } from 'framer-motion'
import Avatar from '../avatar/Avatar'
import Nav from '../nav/Nav'
import styles from './layout.module.css'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['sider']}>
        <div className={styles['avatar']}>
          <Avatar/>
        </div>
        <div className={styles['nav']}>
          <Nav />
        </div>
      </div>
      <main className={styles['main']}>
        {/* 右侧内容区域 */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={styles['frame-content']}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  )
}
