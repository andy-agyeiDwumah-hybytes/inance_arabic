// React
import { useContext } from "react"
// Styles
import styles from "./Footer.module.css"
// i18
import { useTranslation } from "react-i18next"
// Context
import { LanguageContext } from "../../context/languageContext"
// Languages
import { languages } from "../../languages/languageCodes"

export default function Footer() {
  const { t, i18n } = useTranslation("footer")
  const { updateLanguageOptions } = useContext(LanguageContext)

  const date = new Date()
  const year = date.getFullYear()

  const handleChange = (languageCode, writingMode) => {
    i18n.changeLanguage(languageCode)
    updateLanguageOptions(languageCode, writingMode)
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
          <div className="col-md-12 text-end">
            <label
              htmlFor="language-select"
              className={styles.languageSelectText}
            >
              {t("changeLanguageText")}
            </label>
            <select
              name="language"
              id="language-select"
              className={styles.select}
              onChange={e => {
                // Find language chosen by user
                const selectedOption = languages.find(
                  lang => lang.languageCode === e.target.value
                )

                handleChange(
                  selectedOption.languageCode,
                  selectedOption.writingMode
                )
              }}
            >
              {languages.map(val => {
                return (
                  <option key={val.language} value={val.languageCode}>
                    {val.languageCode}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}
