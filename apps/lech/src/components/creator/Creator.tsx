import React, { useRef, useState } from 'react'
import styles from './creactor.module.scss'

export default function Creator() {
  const [showTooltip, setShowTooltip] = useState(false)
  // const tooltipRef = useRef(null)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  return (
    <div className={styles['creator']}>
      <div 
        className={styles['content']}
      >
        <span className={styles['center']}>创作者中心</span>
        <span 
          className={styles['pointer']}
          onMouseEnter={handleMouseEnter}
        >箭头</span>
        {showTooltip && (
          <div 
            // ref={tooltipRef} 
            className={styles['tooltip']}
            onMouseLeave={handleMouseLeave}
          >
            <span className='span-group'>写文章</span>
            <span className='span-group'>写笔记</span>
            <span className='span-group'>写代码</span>
            <span className='span-group'>草稿箱</span>
          </div>
        )}
      </div>
    </div>
  )
}



