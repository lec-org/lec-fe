import React, { useState } from 'react'
import styles from './loginWithCaptcha.module.scss'
// import { describe } from 'node:test'
import { Modal } from '..'
import LoginModal from '../login-with-pwd/LoginWithPwd'
import { ModalType } from '@/constants/types'

export default function LoginRegisterModal({ handleTypeChange }) {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [code, setCode] = useState('')
	const [isSendingCode, setIsSendingCode] = useState(false)
	const [isShowLoginModal, setIsShowLoginModal] = useState(false)
	const [isShowPasswordLoginModal, setIsShowPasswordLoginModal] =
		useState(false)

	// 获取验证码
	const handleGetCode = () => {
		console.log('获取验证码')
	}

	// 登录/注册
	const handleLoginOrRegister = () => {
		console.log('登录/注册')
	}

	// 密码登录
	// const handlePasswordLogin = () => {
	//   setIsShowLoginModal(false);
	//   setIsShowPasswordLoginModal(true);
	// };

	return (
		<>
			<div className={styles['modal-content']}>
				<div className={styles['describe']}>验证码登录 / 注册</div>
				<div className={styles['input-group']}>
					<label htmlFor={styles['phone']}>+86</label>
					<input
						type='text'
						id='phone'
						placeholder='请输入手机号'
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				<div className={styles['input-group']}>
					<input
						type='text'
						placeholder='请输入验证码'
						value={code}
						onChange={(e) => setCode(e.target.value)}
					/>
					<button
						onClick={handleGetCode}
						disabled={isSendingCode}>
						{isSendingCode ? '发送中...' : '获取验证码'}
					</button>
				</div>
				<div
					className={styles['login-register-btn']}
					onClick={handleLoginOrRegister}>
					登录/注册
				</div>
				<div>
					<span
						className={styles['codeLogin']}
						onClick={() =>
							handleTypeChange(ModalType.LoginWithPwd)
						}>
						密码登录
					</span>
				</div>
			</div>
			{/* 显示密码登录弹窗 */}
			<Modal
				isOpen={isShowLoginModal}
				isShowTooltip={false}
				onClose={() => setIsShowLoginModal(false)}>
				<LoginModal handleTypeChange={handleTypeChange} />
			</Modal>
		</>
	)
}
