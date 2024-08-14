import { navs as navs_menu } from '@constants/navs'
import NavLinkItem from '@renderer/components/NavLinkItem'
import NavLinkMenu from '@renderer/components/NavLinkMenu'
import usePageStore from '@renderer/stores/pages'
import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { Button } from '@lec/design'

const Side = ({ isFloat, isShow }) => {
	const toggleSideBarFloat = usePageStore((state) => state.toggleSideBarFloat)
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const menuRef = useRef<HTMLDivElement>(null)
	const handleNavActiveClick = (index: number) => {
		if (index === activeIndex) return
		setActiveIndex(index)
	}

	useEffect(() => {
		if (menuRef.current) {
			console.log(menuRef.current.children)
		}
	})

	return (
		<div
			className={[
				styles['side-area'],
				isFloat ? styles['float'] : styles['block'],
				isShow ? styles['show'] : styles['hide'],
			].join(' ')}>
			{/* 顶部操作栏 */}
			<div className={styles['action-bar']}>
				<Button onClick={toggleSideBarFloat} variant='primary'>toggle sider</Button>
			</div>
			{/* 用户头像 => 可拓展 「头衔」 「认证」 等信息 */}
			<div className={styles['user-avatar']}>
				<img></img>
			</div>
			<NavLinkMenu
				className={styles['navs-menu']}
				defaultUrl={navs_menu[0].path}>
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
						key={nav.path + index}
						onClick={() => handleNavActiveClick(index)}
					/>
				))}
			</NavLinkMenu>
		</div>
	)
}

export default Side
