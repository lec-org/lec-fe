import styles from './index.module.scss'
const SafeHeader = ({ isShow }) => {
	return (
		<div
			className={[
				styles['safe-header'],
				isShow ? styles['show'] : styles['hide'],
			].join(' ')}></div>
	)
}

export default SafeHeader
