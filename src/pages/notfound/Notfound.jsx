// React
import { Link } from "react-router";
// Styles
import styles from "./Notfound.module.css"

export default function Notfound() {
    return (
      <div className={styles.wrapper}>
        <p>
          Page not found. <Link to="/">Back to home?</Link>
        </p>
      </div>
    );
}
