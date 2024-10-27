import styles from './tag.module.scss'

export default function Tag({
  name,
  url,
  className,
  backgroundColor,
}) {
  return (
    <a
      className={[styles["tag"], className || ""].join(" ")}
      style={{ backgroundColor }}
      href={url}
      target="_blank"
    >{name}</a>
  )
} 
