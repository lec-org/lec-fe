import useBoolean from '@lec/hooks/src/useBoolean'
import usePageStore from '@renderer/stores/pages'
import { useEffect } from 'react'
import styles from './index.module.scss'
const SafeHeader = () => {
	const isFloatSideBar = usePageStore((state) => state.isFloatSideBar)
	const setIsFloatSideBar = usePageStore((state) => state.setIsFloatSideBar)

	const [hideSider, { toggle: toggleHideSider }] = useBoolean(isFloatSideBar)

	const handleToggleSider = () => {
		console.log('handleToggleSider')
		toggleHideSider()
		requestAnimationFrame(() => setIsFloatSideBar(hideSider))
	}

	useEffect(() => {
		console.log('hideSider changed')
	}, [hideSider])
	return (
		<div className={styles['safe-header']}>
			<button onClick={handleToggleSider}>toggle sider</button>
		</div>
	)
}

export default SafeHeader
