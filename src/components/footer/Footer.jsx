// Styles
import styles from "./Footer.module.css"
// i18
import { useTranslation } from "react-i18next";

export default function Footer() {

  const [t] = useTranslation("footer")

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className={styles.text}>
              &copy; <span className={styles.displayDateYear}>{year}</span>{t("copyrightText")}{" "}
              {/* Use of standard a link here is because it points to a page outside the app */}
              <a href="https://html.design/">{t("freeHtmlTemplatesText")}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}