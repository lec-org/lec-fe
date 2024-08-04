import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const NavLinkItem = ({ className, to, label, onClick }) => {
	const navigator = useNavigate()
	return (
		<nav
			className={[styles['nav-link-item'], className].join(' ')}
			onClick={() => {
				navigator(to), onClick()
			}}>
			{label}
		</nav>
	)
}

export default NavLinkItem
