import useBoolean from '@lec/hooks/src/useBoolean'
import SafeHeader from '../SafeHeader'
import styles from './index.module.scss'
const Content = ({ showHeader = true, children }) => {
  const [isShowHeader, { toggle: toggleShowHeader }] = useBoolean(true)

  return (
    <div className={styles['content-wrapper']}>
      <div className={[styles['content-header'], showHeader ? '' : styles['hide']].join(' ')}>
        {showHeader && <SafeHeader />}
      </div>
      <div className={styles['content-area']}>{children}</div>
    </div>
  )
}

export default Content
