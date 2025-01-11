// Styles
import styles from "./Professional.module.css"
// Images
import professionalImg from "../../assets/professional-img.png"
// React
import { Link, useLocation } from "react-router"
import { useContext } from "react"
// i18
import { useTranslation } from "react-i18next"
// Context
import { LanguageContext } from "../../context/languageContext"

export default function Professional() {
  const { t, i18n } = useTranslation("professional")
  const { handleLinkClick } = useContext(LanguageContext)
  const { pathname } = useLocation()
  let languageCode = i18n.language

  return (
    <section
      className={[
        "professional_section",
        "layout_padding",
        styles.section,
      ].join(" ")}
      aria-labelledby="professional-heading"
    >
      <div className="container">
        <div className={["row", styles.row].join(" ")}>
          <div className="col-md-6">
            <div className="img-box">
              <img
                src={professionalImg}
                alt={t("imgAlt")}
                // Flip image based on writing mode
                className={[
                  styles.img,
                  i18n.dir() === "rtl" && styles.imgRtl,
                ].join(" ")}
              />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="detail-box">
              <h2 className={styles.h2} id="professional-heading">
                {t("headingStart")} <br />
                {t("headingEnd")}
              </h2>
              <p className={styles.para}>{t("paragraph")}</p>
              <Link
                to={`/${languageCode}`}
                className={styles.link}
                onClick={e =>
                  handleLinkClick(e, pathname, `/${languageCode}`)
                }
              >
                {t("linkText")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
