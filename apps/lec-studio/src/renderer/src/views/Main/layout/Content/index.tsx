import useMount from '@lec/hooks/src/useMount'
import useUnMount from '@lec/hooks/src/useUnMount'
import usePageStore from '@renderer/stores/pages'
import { useRef } from 'react'
import SafeHeader from '../SafeHeader'
import styles from './index.module.scss'
const Content = ({ children }) => {
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
			<div className={styles['content-area']}>{children}</div>
		</div>
	)
}

export default Content
