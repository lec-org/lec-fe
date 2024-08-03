import { navs as navs_menu } from '@constants/navs'
import useBoolean from '@lec/hooks/src/useBoolean'
import NavLinkItem from '@renderer/components/NavLinkItem'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
const Side = ({ floatSider }) => {
  const [isFloatLeft, { toggle: toggleFloat }] = useBoolean(false)
  console.log(toggleFloat)
  const navigator = useNavigate()
  return (
    <div className={[styles['side-area'], floatSider ? styles['float'] : ''].join(' ')}>
      <div className={styles['user-avatar']}>
        <img></img>
      </div>
      <div className={styles['navs-menu']}>
        {navs_menu.map((nav, index) => (
          <NavLinkItem className={styles['nav-item']} to={nav.path} label={nav.label} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Side
