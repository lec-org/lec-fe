import useBoolean from '@lec/hooks/src/useBoolean'
import usePageStore from '@renderer/stores/pages'
import styles from './index.module.scss'
const SafeHeader = () => {
  const isShowSiderBar = usePageStore((state) => state.isShowSideBar)
  const setSiderBar = usePageStore((state) => state.setIsShowSideBar)

  const [hideSider, { toggle: toggleHideSider }] = useBoolean(isShowSiderBar)

  const handleToggleSider = () => {
    console.log('handleToggleSider')
    toggleHideSider()
    requestAnimationFrame(() => setSiderBar(hideSider))
  }
  return (
    <div className={styles['safe-header']}>
      <button onClick={handleToggleSider}>toggle sider</button>
    </div>
  )
}

export default SafeHeader
