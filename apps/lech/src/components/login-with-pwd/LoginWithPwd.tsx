import React, { useState } from 'react'
import styles from './loginWithPwd.module.scss'
import { Modal } from '..'
import ResetPasswordModal from '../resetPassword/ResetPassword'
import { ModalType } from '@/constants/types'

export default function LoginModal({handleTypeChange}) {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [code, setCode] = useState('')
  const [isShowResetModal, setIsShowResetModal] = useState(false)

  // 忘记密码
  const handleForgetCode = () => {
    console.log('忘记密码')
  }

  // 注册
  const handleRegister = () => {
    console.log('注册')
  }

  // 登录
  const handleLogin = () => {
    console.log('登录')
  }

  return (
    <>
      <div className={styles['modal-content']}>
        <div className= {styles['describe']}>密码登录</div>
        <div className={styles['input-group']}>
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
            placeholder='请输入密码'
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={() => handleTypeChange(ModalType.ResetPwd)}
          >
            忘记密码
          </button>
        </div>
        <div className={styles['btn-group']}>
          <button 
            className={styles['register']}
            onClick={handleRegister}
          >
            注册
          </button>
          <button
            className={styles['login']}
            onClick={handleLogin}
          >
            登录
          </button>
        </div>
        <div>
          <span 
            className={styles['codeLogin']}
            onClick={() => handleTypeChange(ModalType.LoginWithCaptcha)}
          >
            验证码登录
          </span>
        </div>
      </div>
      <Modal
        isOpen={isShowResetModal}
        isShowTooltip={false}
        onClose={() => setIsShowResetModal(false)}
       >
        <ResetPasswordModal handleTypeChange={handleTypeChange}/>
      </Modal>
    </>
  )
}
