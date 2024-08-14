import { useListener } from '@lec/hooks/src/listener'
import usePageStore from '@renderer/stores/pages'
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
			hideSideBar()
		}
	}

	useListener('mousemove', document, handleMouseMove)

	return (
		<>
			<div className={styles['main-container']}>
				<Side
					isFloat={sideBar_isFloat}
					isShow={sideBar_isShow}
				/>
				<Content />
			</div>
		</>
	)
}

export default Main
