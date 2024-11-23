import React, { useState } from 'react'
import styles from './resetPassword.module.scss'
// import './resetPassword.scss'
import { ModalType } from '@/constants/types'

export default function ResetPasswordModal({handleTypeChange}) {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const [isSendingCode, setIsSendingCode] = useState(false)
  const [isShowLoginModal, setIsShowLoginModal] = useState(false)
  const [isShowPasswordLoginModal, setIsShowPasswordLoginModal] = useState(false);

  // 获取验证码
  const handleGetCode = () => {
    console.log('获取验证码')
  }

  // 修改
  const handleLoginOrRegister = () => {
    console.log('修改')
  }

  // 密码登录
  // const handlePasswordLogin = () => {
  //   setIsShowLoginModal(false);
  //   setIsShowPasswordLoginModal(true);
  // };

  return (
    <>
      <div className={styles['modal-content']}>
        <div className={styles['describe']}>手机重置密码</div>
        <div className={styles['input-group']}>
          <label htmlFor={styles['phone']}>+86</label>
          <input 
            type="text"
            id='phone'
            placeholder='请输入手机号'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
           />
        </div>
        <div className={styles['input-group']}>
          <input 
            type="text" 
            placeholder='请输入新密码'
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className={styles['input-group']}>
          <input 
            type="text" 
            placeholder='请输入验证码'
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={handleGetCode}
            disabled={isSendingCode}
          >
            {isSendingCode? '发送中...' : '获取验证码'}
          </button>
        </div>
        <div className={styles['login-register-btn']} onClick={handleLoginOrRegister}>
          修改
        </div>
        <div 
          className={styles['returnLogin']}
          onClick={() => {
            handleTypeChange(ModalType.LoginWithPwd)
          }}
        >
          返回登录
        </div>
      </div>
    </>
  )
}
