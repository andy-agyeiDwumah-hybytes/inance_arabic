// Styles
import styles from "./Header.module.css"
// React
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// Components
import Navigation from "../navigation/Navigation";
import Slider from "../slider/Slider";


export default function Header() {
  // Only show Slider component if current page is the index (home page)
  // True by default
  const { pathname } = useLocation();
  const [currentPageIsIndex, setCurrentPageIsIndex] = useState(true);

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
              <Link to="/" className={styles.topHeaderLinks}>
                <FontAwesomeIcon
                  icon={faPhone}
                  className={[styles.headerIcon, styles.phoneIcon].join(" ")}
                ></FontAwesomeIcon>
                &nbsp;Call : +01 123455678990
              </Link>
              <Link to="/" className={styles.topHeaderLinks}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={[styles.headerIcon, styles.envelopeIcon].join(" ")}
                ></FontAwesomeIcon>
                &nbsp;Email : demo@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className="container-fluid">
            <Navigation styles={styles} />
          </div>
        </div>
      </header>
      {currentPageIsIndex && <Slider />}
    </>
  );
}
