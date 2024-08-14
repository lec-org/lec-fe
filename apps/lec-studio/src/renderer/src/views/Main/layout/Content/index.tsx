import { useListener } from '@lec/hooks/src/listener'
import usePageStore from '@renderer/stores/pages'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
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

	useListener('mousemove', document, handleMouseMove)

	return (
		<div
			ref={contentRef}
			className={styles['content-wrapper']}>
			<div className={styles['content-header']}>
				<SafeHeader isShow={header_isShow} />
			</div>

			<div className={styles['content-area']}>
				<Outlet />
			</div>
		</div>
	)
}

export default Content
