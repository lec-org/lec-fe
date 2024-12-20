import { motion } from 'framer-motion'
import styles from './nav.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { NavItems } from '@renderer/constants/side-nav'
function NavItem({path, icon: Icon, label}) {
  const location = useLocation()
  const navigator = useNavigate()

  const isActive = location.pathname === path

  return(
    <div 
      key={path}
      onClick={() => navigator(path)}
      className={clsx(styles['nav-item'], isActive && styles['active'])}
      >
        <Icon size={20} />
    </div>
  )
}
export default function Nav() {
  return (
    <motion.nav
      className={styles['nav']}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {
        NavItems.map(({path, icon, label}) => (
          <NavItem key={path} path={path} icon={icon} label={label} />
        ))
      }
    </motion.nav>
  )
}
