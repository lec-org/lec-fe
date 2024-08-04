import { navs as navs_menu } from '@constants/navs'
import NavLinkItem from '@renderer/components/NavLinkItem'
import { useState } from 'react'
import styles from './index.module.scss'

const Side = ({ floatSider }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const handleNavActiveClick = (index: number) => {
		if (index === activeIndex) return
		setActiveIndex(index)
	}

	return (
		<div
			className={[
				styles['side-area'],
				floatSider ? styles['float'] : '',
			].join(' ')}>
			<div className={styles['user-avatar']}>
				<img></img>
			</div>
			<div className={styles['navs-menu']}>
				{navs_menu.map((nav, index) => (
					<NavLinkItem
						className={[
							styles['nav-item'],
							activeIndex === index   
								? styles['nav-item-active']
								: '',
						].join(' ')}
						to={nav.path}
						label={nav.label}
						key={index}
						onClick={() => handleNavActiveClick(index)}
					/>
				))}
			</div>
		</div>
	)
}

export default Side
