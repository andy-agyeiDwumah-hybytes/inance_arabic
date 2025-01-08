// React
import { Link } from "react-router"
import { useContext } from "react"
// Images
import sliderImg from "../../assets/slider-img.png"
// Styles
import styles from "./Slider.module.css"
// i18
import { useTranslation } from "react-i18next"
// Context
import { LanguageContext } from "../../context/languageContext"

export default function Slider() {
  const { t } = useTranslation("hero")
  const { languageOptions } = useContext(LanguageContext)
  const { language } = languageOptions

  return (
    <section className="slider_section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <h1 className={styles.h1} id="hero-heading">
                {t("heroTextStart")} <br />
                {t("heroTextMiddle")} <br />
                {t("heroTextEnd")}
              </h1>
              <p className={styles.para}>{t("paragraph")}</p>
              <Link href={`/${language}`} className={styles.link}>
                {t("contactUsLinkText")}
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img
                src={sliderImg}
                alt={t("imgAltText")}
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
