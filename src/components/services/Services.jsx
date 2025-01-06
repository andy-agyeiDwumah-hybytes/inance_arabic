// Components
import Service from "../service/Service";
// Images
import maintenanceImg from "../../assets/s1.png"
import electricalImg from "../../assets/s2.png"
import plumbingImg from "../../assets/s3.png"
// Styles
import styles from "./Services.module.css"
// React
import { Link } from "react-router";
// i18
import { useTranslation } from "react-i18next";

export default function Services() {

  const {t} = useTranslation("services")

  return (
      <section className={["layout_padding", styles.section].join(" ")} aria-labelledby="services-heading">
      <div className="container">
        <div className="heading_container heading_center">
          <h2 id="services-heading">{t("heading")}</h2>
        </div>
        <div className="row">
          <Service heading={t("serviceOneHeading")} imgSrc={maintenanceImg} styles={styles}>
            {t("serviceOneText")}
          </Service>
          <Service heading={t("serviceTwoHeading")} imgSrc={electricalImg} styles={styles}>
            {t("serviceTwoText")}
          </Service>
          <Service heading={t("serviceThreeHeading")} imgSrc={plumbingImg} styles={styles}>
            {t("serviceThreeText")}
          </Service>
        </div>
        <div className={styles.btnBox}>
          <Link to="/" className={styles.btnBoxLink}>{t("linkText")}</Link>
        </div>
      </div>
    </section>
  );
}
