import useMount from '@lec/hooks/src/useMount'
import useUnMount from '@lec/hooks/src/useUnMount'
import usePageStore from '@renderer/stores/pages'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import SafeHeader from '../SafeHeader'
import styles from './index.module.scss'
import './index.scss'

const Content = () => {
	const contentRef = useRef<HTMLDivElement>(null)
	const header_isShow = usePageStore((state) => state.header_isShow)
	const [showHeader, hideHeader] = usePageStore(
		(state) => state.toggleHeaderShow,
	)

	const handleMouseMove = (e: MouseEvent) => {
		const { clientY } = e
		if (clientY < 10) {
			showHeader()
		} else {
			hideHeader()
		}
	}
	useMount(() => {
		contentRef.current?.addEventListener('mousemove', handleMouseMove)
	})

	useUnMount(() => {
		contentRef.current?.removeEventListener('mousemove', handleMouseMove)
	})
	return (
		<div
			ref={contentRef}
			className={styles['content-wrapper']}>
			<div className={styles['content-header']}>
				<SafeHeader isShow={header_isShow} />
			</div>
			{/*// *路由切换动画*/}
			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					timeout={300}
					classNames='page'
					unmountOnExit>
					<div className={styles['content-area']}>
						<Outlet />
					</div>
				</CSSTransition>
			</SwitchTransition>
		</div>
	)
}

export default Content
