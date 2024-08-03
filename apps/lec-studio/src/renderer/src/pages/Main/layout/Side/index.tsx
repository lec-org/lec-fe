import useBoolean from '@lec/hooks/src/useBoolean'
import styles from './index.module.scss'
const Side = () => {
  const [isFloatLeft, { toggle: toggleFloat }] = useBoolean(false)
  console.log(toggleFloat)
  return (
    <div className={[styles['side-area'], isFloatLeft ? styles['float'] : ''].join(' ')}>
      <button onClick={toggleFloat}>Click me to float left</button>

      <div>
        <h2>Side Area</h2>
        <span>Now {isFloatLeft ? 'float left' : 'Not float left'}</span>
      </div>
    </div>
  )
}

export default Side
