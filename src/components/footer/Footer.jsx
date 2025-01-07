// Styles
import { useContext } from "react"
import styles from "./Footer.module.css"
// i18
import { useTranslation } from "react-i18next"
// React
import { TextDirectionContext } from "../../context/textDirectionContext";
// Components
import Button from "../button/Button"

export default function Footer() {
  const { t, i18n } = useTranslation("footer")
  const { languageOptions, updateLanguageOptions } = useContext(TextDirectionContext);
  const { textDirection } = languageOptions || {}

  const date = new Date()
  const year = date.getFullYear()

  const handleClick = (language, textDirection) => {
    i18n.changeLanguage(language)
    updateLanguageOptions(language, textDirection);
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className={styles.text}>
              &copy; <span className={styles.displayDateYear}>{year}</span>{" "}
              {t("copyrightText")}{" "}
              {/* Use of standard a link here is because it points to a page outside the app */}
              <a href="https://html.design/">{t("freeHtmlTemplatesText")}</a>
            </p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-12 text-center">
            {textDirection === "rtl" && (
              <Button
                languageText="EN"
                handleClick={() => handleClick("en", "ltr")}
                styles={styles}
              />
            )}
            {textDirection === "ltr" && (
              <Button
                languageText="AR"
                handleClick={() => handleClick("ar", "rtl")}
                styles={styles}
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
