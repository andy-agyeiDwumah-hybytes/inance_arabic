// React
// import { useContext } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
// Styles
import styles from "./Footer.module.css"
// i18
import { useTranslation } from "react-i18next"
// Context
// import { LanguageContext } from "../../context/languageContext"
// Languages
import { languages } from "../../languages/languageCodes"
import { LOCALSTORAGEKEY } from "../../constants/Constants"

export default function Footer() {
  const { t, i18n } = useTranslation("footer")
  // const { updateLanguageOptions } = useContext(LanguageContext)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  let { langCode } = useParams()

  const date = new Date()
  const year = date.getFullYear()

  const handleChange = (languageCode, writingMode) => {
    console.log("update page: select dropdown")
    // Get langcode, and navigate to new language page
    // updateLanguageOptions(languageCode, writingMode)
    const updatedOptions = { language: languageCode, textDirection: writingMode }
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedOptions))
    navigate(pathname.replace(langCode, languageCode))
    i18n.changeLanguage(languageCode)
    // console.log("state update")
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className={styles.text}>
              &copy; <span className={styles.displayDateYear}>{year}</span>{" "}
              {t("copyrightText")}{" "}
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
              value={i18n.language}
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
              {/* Show all languages supported by website */}
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
