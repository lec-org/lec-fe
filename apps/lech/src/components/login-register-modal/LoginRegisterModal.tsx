import React, { useState } from 'react'
import styles from './loginRegisterModal.module.scss'
import { describe } from 'node:test'

export default function LoginRegisterModal() {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const [isSendingCode, setIsSendingCode] = useState(false)

  // 获取验证码
  const handleGetCode = () => {
    console.log('获取验证码')
  }

  // 登录/注册
  const handleLoginOrRegister = () => {
    console.log('登录/注册')
  }

  return (
    <>
      <div className={styles['modal-content']}>
        <div className= {styles['describe']}>验证码登录 / 注册</div>
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
          登录/注册
        </div>
        <div>
          <span className={styles['codeLogin']}>密码登录</span>
        </div>
      </div>
    </>
  )
}
