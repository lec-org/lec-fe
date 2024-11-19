import React, { useState } from 'react'
import styles from './login_Register.module.scss'
import { Modal } from '..'
import LoginRegisterModal from '../login-register-modal/LoginRegisterModal'

export default function Login_register() {
	const [isShowModal, setIsShowModal] = useState(false)
	return (
		<>
			<div className={styles['login-register']}>
				<button
					className={styles['login-btn']}
					onClick={() => setIsShowModal(true)}>
					登录
				</button>
				<span className={styles['separate']}>|</span>
				<button
					className={styles['register-btn']}
					onClick={() => setIsShowModal(true)}>
					注册
				</button>
			</div>

      {/* 显示登录/注册弹窗 */}
			<Modal
				isOpen={isShowModal}
				isShowTooltip={false}
				onClose={() => setIsShowModal(false)}
      >
				<LoginRegisterModal />
			</Modal>
      
		</>
	)
}
