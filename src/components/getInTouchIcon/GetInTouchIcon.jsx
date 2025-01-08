// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// React
import { Link } from "react-router"

export default function GetInTouchIcon({ icon, styles, languageCode }) {
  return (
    <div>
      <Link to={`/${languageCode}`} className={styles.iconLink}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </Link>
    </div>
  )
}
