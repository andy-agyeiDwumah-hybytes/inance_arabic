// Styles
import styles from "./Header.module.css"
// React
import { Link, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// Components
import Navigation from "../navigation/Navigation";
import Slider from "../slider/Slider";
// i18
import { useTranslation } from "react-i18next";
// Context
import { TextDirectionContext } from "../../context/textDirectionContext";

export default function Header() {
  // Only show Slider component if current page is the index (home page)
  // True by default
  const { pathname } = useLocation();
  const [currentPageIsIndex, setCurrentPageIsIndex] = useState(true);
  const { t } = useTranslation("header")
  const { textDirection } = useContext(TextDirectionContext);

  useEffect(() => {
    if (pathname === "/") {
      setCurrentPageIsIndex(true);
    } else {
      setCurrentPageIsIndex(false);
    }
  }, [pathname]);

  return (
    <>
      <header className="header_section">
        <div className={styles.top}>
          <div className="container-fluid">
            <div className={["contact_nav", styles.contactNav].join(" ")}>
              {/* Dynamically change icon positon around based on text direction */}
              {textDirection === "ltr" ? (
                <>
                  <Link to="/" className={styles.topHeaderLinks}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={[styles.headerIcon, styles.phoneIcon].join(
                        " "
                      )}
                    ></FontAwesomeIcon>
                    &nbsp;{t("callText")}
                  </Link>
                  <Link to="/" className={styles.topHeaderLinks}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={[styles.headerIcon, styles.envelopeIcon].join(
                        " "
                      )}
                    ></FontAwesomeIcon>
                    &nbsp;{t("emailText")}
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className={styles.topHeaderLinks}>
                    {t("callText")}&nbsp;
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={[styles.headerIcon, styles.phoneIcon].join(
                        " "
                      )}
                    ></FontAwesomeIcon>
                  </Link>
                  <Link to="/" className={styles.topHeaderLinks}>
                    {t("emailText")}&nbsp;
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={[styles.headerIcon, styles.envelopeIcon].join(
                        " "
                      )}
                    ></FontAwesomeIcon>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className="container-fluid">
            <Navigation styles={styles} t={t} />
          </div>
        </div>
      </header>
      {currentPageIsIndex && <Slider />}
    </>
  );
}
