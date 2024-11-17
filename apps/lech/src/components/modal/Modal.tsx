import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  isShowTooltip?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  isOpen = false,
  isShowTooltip = true,
  onClose,
  children,
  className,
}: ModalProps) {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={styles['modal-container']}>
      {/* 遮罩层 */}
      <div
        className={styles.overlay}
        onClick={onClose}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />

      {/* 提示框 */}
      {isShowTooltip && (
        <div
          className={clsx(styles.tooltip, showTooltip && styles.visible)}
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}
        >
          点击关闭弹窗
        </div>
      )}

      {/* Modal内容 */}
      <div className={styles['content-wrapper']}>
        <div
          className={clsx(styles.content, className)}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
