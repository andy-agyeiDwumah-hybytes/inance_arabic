// Styles
import { useContext } from "react"
import styles from "./Footer.module.css"
// i18
import { useTranslation } from "react-i18next"
// React
import { LanguageContext } from "../../context/languageContext"
// Components
import Button from "../button/Button"

export default function Footer() {
  const { t, i18n } = useTranslation("footer")
  const {currentLanguage, updateCurrentLanguage} = useContext(LanguageContext)

  const date = new Date()
  const year = date.getFullYear()

  const handleClick = language => {
    i18n.changeLanguage(language)
    updateCurrentLanguage(language)
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
            {currentLanguage === "ar" && (
              <Button
                languageText="EN"
                handleClick={() => handleClick("en")}
                styles={styles}
              />
            )}
            {currentLanguage === "en" && (
              <Button
                languageText="AR"
                handleClick={() => handleClick("ar")}
                styles={styles}
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
