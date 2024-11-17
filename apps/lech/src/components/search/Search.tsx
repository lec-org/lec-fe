import { useState } from 'react'
import styles from './search.module.scss'

export default function Search() {
  const [isActive, setIsActive] = useState(false)
  return (
    <form role="search" className={[styles['search-form'], isActive ? styles['active'] : ''].join(' ')}>
      <input
        type='search'
        className={[styles['search-input'], isActive ? styles['active'] : ''].join(' ')}
        maxLength={64}
        placeholder='十里淘金'
        onFocus={() => { setIsActive(true) }}
      />
      <div className={styles['search-icon-container']}>
        <div className={styles['icon']} />
      </div>
    </form>
  )
}
