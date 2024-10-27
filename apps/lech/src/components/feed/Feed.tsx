import Tag from "../tag/Tag";
import styles from './feed.module.scss'

export default function Feed({
  title, desc, author, views, likes, tags
}) {
  return (
    <div className={styles["feed_item_entry"]}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["desc"]}>{desc}</div>
        <div className={styles["footer"]}>
          <div className={styles["display_list"]}>
            <a className={styles["author"]} href={author.url} target="_blank">{author.name}</a>
            <div className={styles["view"]}>{views}</div>
            <div className={styles["like"]}>{likes}</div>
          </div>
          <div className={styles["footer_tags"]}>
            {
              tags.map((tag, index) => <Tag key={index} name={tag} />)
            }
          </div>
        </div>
      </div>
      <div className={styles["image"]}></div>
    </div>
  )
}
