import styles from './index.module.scss'

const Clock = () => {
	return (
		<div className={styles['clock-pages']}>
			<div className={styles['left']}></div>
			<div className={styles['vertical-divider']}></div>
			<div className={styles['right']}></div>
		</div>
	)
}

export default Clock
