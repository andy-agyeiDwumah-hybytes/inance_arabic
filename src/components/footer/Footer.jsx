// Styles
import styles from "./Footer.module.css"

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className={styles.text}>
              &copy; <span className={styles.displayDateYear}>{year}</span> All
              Rights Reserved By{" "}
              {/* Use of standard a link here is because it points to a page outside the app */}
              <a href="https://html.design/">Free Html Templates</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}