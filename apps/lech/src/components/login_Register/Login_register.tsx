import React from 'react'
import styles from './login_Register.module.scss'

export default function Login_register() {
  return (
    <div className={styles['login-register']}>
      <button className={styles['login-btn']}>
        登录
        <span className={styles['separate']}>|</span>
        <span className={styles['register-btn']}>注册</span>
      </button>
      
    </div>
  )
}
