import React, { useState } from 'react'
import styles from './login_Register.module.scss'
import { Modal } from '..'
import LoginRegisterModal from '../login-with-captcha/LoginWithCaptcha'
import LoginModal from '../login-with-pwd/LoginWithPwd'
import ResetPasswordModal from '../resetPassword/ResetPassword'
import { ModalType } from '@/constants/types'

function CurrentModal({ type, handleTypeChange }) {
	switch (type) {
		case ModalType.LoginWithCaptcha:
			return <LoginRegisterModal handleTypeChange={handleTypeChange} />
		case ModalType.LoginWithPwd:
			return <LoginModal handleTypeChange={handleTypeChange} />
		case ModalType.ResetPwd:
			return <ResetPasswordModal handleTypeChange={handleTypeChange} />
		default:
			return null
	}
}

export default function Login_register() {
	const [isShowModal, setIsShowModal] = useState(false)
	const [currentModal, setCurrentModal] = useState(ModalType.LoginWithCaptcha)
	const handleTypeChange = (type) => {
		setCurrentModal(type)
	}
	const handleModalClose = () => {
		setIsShowModal(false)
		handleTypeChange(ModalType.LoginWithCaptcha)
	}
	return (
		<>
			<div 
				className={styles['login-register']}
				onClick={() => setIsShowModal(true)}
			>
				<button
					className={styles['login-btn']}>
					登录
				</button>
				<span className={styles['separate']}>|</span>
				<button
					className={styles['register-btn']}>
					注册
				</button>
			</div>

			{/* 显示登录/注册弹窗 */}
			<Modal
				isOpen={isShowModal}
				isShowTooltip={false}
				onClose={handleModalClose}>
				<CurrentModal
					type={currentModal}
					handleTypeChange={handleTypeChange}
				/>
			</Modal>
		</>
	)
}
