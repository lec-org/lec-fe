import useBoolean from '@lec/hooks/src/useBoolean'
import SafeHeader from '../SafeHeader'
import styles from './index.module.scss'
const Content = ({ children }) => {
  const [isShowHeader, { toggle: toggleShowHeader }] = useBoolean(true)

  return (
    <div className={styles['content-wrapper']}>
      <div className={[styles['content-header'], isShowHeader ? '' : styles['hide']].join(' ')}>
        {isShowHeader && <SafeHeader />}
      </div>
      <div className={styles['content-area']}>
        <button onClick={toggleShowHeader}>Toggle Header</button>
        {children}
      </div>
    </div>
  )
}

export default Content
