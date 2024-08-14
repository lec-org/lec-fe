import { Input } from '@lec/design'
import formatAccount from '@renderer/utils/formatAccount'
import { useState } from 'react'
import styles from './index.module.scss'
const Login = () => {
	const [account, setAccount] = useState<string>('')
	const formatLoginAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
		const formattedAccount = formatAccount(event.target.value as string)
		setAccount(formattedAccount)
	}

	const handleLogin = () => {
		window.api.openMainWindow()
	}

	return (
		<div className={styles['login-view']}>
			<div className={styles['welcome']}>
				<div className='H1'>Lec Studio</div>
			</div>
			<div className={styles['img']}>
				<img
					src=''
					alt='用户头像'
				/>
			</div>
			<div className={styles['ipt-container']}>
				<Input
					className={styles['password']}
					value={account}
					onChange={formatLoginAccount}
					placeholder='请输入手机/邮箱/用户名'
				/>
				<Input
					className={styles['password']}
					type='password'
					placeholder='请输入密码'
				/>
			</div>
			<div className={styles['login-btn']}>
				<button onClick={handleLogin}>登录</button>
			</div>
			<div className={styles['info-area']}>
				<span className='span'>密码找回</span>
				<span> | </span>
				<span className='span'>注册</span>
			</div>
		</div>
	)
}

export default Login
