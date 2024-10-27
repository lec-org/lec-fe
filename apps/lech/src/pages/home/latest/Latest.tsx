import Feed from "@/components/feed/Feed";
import { feedList } from "@/mock/feeds";
import styles from './latest.module.scss'

export default function Latest() {
  return (
    <ul className={styles["latest_list"]}>
      {
        feedList.map((feed, index) => <li key={feed.id + index} className={styles["latest_item"]}>
          <Feed {...feed} />
        </li>)
      }
    </ul>
  )
}
