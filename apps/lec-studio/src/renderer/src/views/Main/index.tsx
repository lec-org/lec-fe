import { useMount, useUnMount } from '@lec/hooks/src/effect'
import usePageStore from '@renderer/stores/pages'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import { Content, Side } from './layout'

const Main = () => {
	const sideBar_isShow = usePageStore((state) => state.sideBar_isShow)
	const sideBar_isFloat = usePageStore((state) => state.sideBar_isFloat)

	const [showSideBar, hideSideBar] = usePageStore(
		(state) => state.toggleSideBarShow,
	)

	const handleMouseMove = (e: MouseEvent) => {
		if (e.clientX <= 10) {
			showSideBar()
		} else {
			sideBar_isShow && hideSideBar()
		}
	}

	useMount(() => {
		document.addEventListener('mousemove', handleMouseMove)
	})
	useUnMount(() => {
		document.removeEventListener('mousemove', handleMouseMove)
	})

	return (
		<>
			<div className={styles['main-container']}>
				<Side
					isFloat={sideBar_isFloat}
					isShow={sideBar_isShow}
				/>
				<Content>
					<Outlet />
				</Content>
			</div>
		</>
	)
}

export default Main
