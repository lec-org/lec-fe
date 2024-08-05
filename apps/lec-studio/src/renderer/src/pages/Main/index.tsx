import useBoolean from '@lec/hooks/src/useBoolean'
import usePageStore from '@renderer/stores/pages'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import { Content, Side } from './layout'

const Main = () => {
	const [isShowSiderBar, { setTrue: showIt, setFalse: hideIt }] =
		useBoolean(false)
	const [showHeader, { setTrue: show, setFalse: hide }] = useBoolean(true)
	const isFloatSider = usePageStore((state) => state.isFloatSideBar)
	const setIsFloatSideBar = usePageStore((state) => state.setIsFloatSideBar)
	const handleMouseMove = (e: MouseEvent) => {
		if (e.clientX <= 10) {
			showIt()
		} else {
			hideIt()
		}

		if (e.clientY <= 10) {
			show()
		} else {
			hide()
		}
	}
	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove)
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])
	return (
		<>
			<div className={styles['main-container']}>
				<Side
					isFloat={isFloatSider}
					isShow={isShowSiderBar}
				/>
				<Content showHeader={showHeader}>
					<Outlet />
				</Content>
			</div>
		</>
	)
}

export default Main
