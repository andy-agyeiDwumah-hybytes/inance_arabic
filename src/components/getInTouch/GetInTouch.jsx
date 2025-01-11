// Components
import GetInTouchIcon from "../getInTouchIcon/GetInTouchIcon"
import GetInTouchImg from "../getInTouchImg/GetInTouchImg"
// Styles
import styles from "./GetInTouch.module.css"
// Font awesome
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {
  faPhone,
  faMapMarker,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
// i18
import { useTranslation } from "react-i18next"

export default function GetInTouch() {
  const { t, i18n } = useTranslation("getInTouch")

  return (
    <section
      className={styles.infoSection}
      aria-labelledby="get-in-touch-heading"
    >
      <div className="container">
        <h4 id="get-in-touch-heading" className={styles.h4}>
          {t("heading")}
        </h4>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className={styles.infoItems}>
              <div className="row">
                <GetInTouchImg
                  icon={faMapMarker}
                  styles={styles}
                  dataContent="location"
                  languageCode={i18n.language}
                >
                  {t("getInTouchImgOneText")}
                </GetInTouchImg>
                <GetInTouchImg
                  icon={faPhone}
                  styles={styles}
                  dataContent="phone"
                  languageCode={i18n.language}
                >
                  {t("getInTouchImgTwoText")}
                </GetInTouchImg>
                <GetInTouchImg
                  icon={faEnvelope}
                  styles={styles}
                  dataContent="mail"
                  languageCode={i18n.language}
                >
                  {t("getInTouchImgThreeText")}
                </GetInTouchImg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styles.socialBox}>
            <h4 className={styles.h4}>{t("followUsText")}</h4>
            <div className={styles.box}>
              <GetInTouchIcon
                icon={faFacebookF}
                styles={styles}
                languageCode={i18n.language}
              />
              <GetInTouchIcon
                icon={faTwitter}
                styles={styles}
                languageCode={i18n.language}
              />
              <GetInTouchIcon
                icon={faYoutube}
                styles={styles}
                languageCode={i18n.language}
              />
              <GetInTouchIcon
                icon={faInstagram}
                styles={styles}
                languageCode={i18n.language}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
