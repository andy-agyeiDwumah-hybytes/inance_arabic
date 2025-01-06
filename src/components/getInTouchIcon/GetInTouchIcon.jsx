// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// React
import { Link } from "react-router";

export default function GetInTouchIcon({ icon, styles }) {
  return (
    <div>
      <Link to="/" className={styles.iconLink}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </Link>
    </div>
  );
}
