import React, { useState } from 'react'
import Portal from '../portal/Portal'

import styles from './modal.module.scss'

interface IModalProps {
  isOpen: boolean
  isShowTooltips: boolean
  onClose: () => void       
  children: React.ReactNode
  className?: string,
  tooltipsText?: string
}

export default function Modal({
  isOpen = false,
  isShowTooltips = false,
  onClose,
  children,
  className,
  tooltipsText = '点击关闭弹窗',
}: IModalProps) {
  const [tooltipPosition, setTooltipPosition] = useState({x: 0, y: 0})
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  if(!isOpen) return null

  return <Portal>
    <div className={styles['modal-container']}>
      {/* 蒙层 */}
      <div 
        className="modal-mask"
        onClick={onClose}
        onMouseMove={handleMouseMove}
      />
      {/* 蒙层提示 */}
    {
      isShowTooltips && (
        <div 
        className="modal-mask-tooltips"
        style={{
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
        }}
        >
        {tooltipsText}
      </div>
      )
    }
      {/* 弹窗内容 */}
      <div className="modal-content-wrapper">
        <div 
          className={className || 'content'}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  </Portal>
}
