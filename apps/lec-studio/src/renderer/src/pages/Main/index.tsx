import useBoolean from '@lec/hooks/src/useBoolean'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Content, Side } from './layout'

const Main = () => {
  const [floatSider, { setTrue: float, setFalse: unFloat }] = useBoolean(false)
  const [showHeader, { setTrue: show, setFalse: hide }] = useBoolean(true)
  const navigator = useNavigate()
  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      if (e.clientX <= 10) {
        float()
      } else {
        unFloat()
      }

      if (e.clientY <= 10) {
        show()
      } else {
        hide()
      }
    })
  }, [])
  return (
    <>
      <div className={styles['main-container']}>
        <Side floatSider={floatSider} />
        <Content showHeader={showHeader}>
          <Outlet />
        </Content>
      </div>
    </>
  )
}

export default Main
