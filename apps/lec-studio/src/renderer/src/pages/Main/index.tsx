import styles from './index.module.scss'
import { Content, Side } from './layout'

const Main = () => {
  return (
    <>
      <div className={styles['main-container']}>
        <Side />
        <Content>out</Content>
      </div>
    </>
  )
}

export default Main
