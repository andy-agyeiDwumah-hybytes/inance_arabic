// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// React
import { useContext } from "react";
// Context
import { TextDirectionContext } from "../../context/textDirectionContext";

export default function ClientInfo({ imgSrc, name, children, numOfStars, styles }) {
  const { languageOptions } = useContext(TextDirectionContext)
  const { textDirection } = languageOptions || {};
  const fontAwesomeIcons = [];

  // Generate number of stars for client review
  for (let i = 0; i < numOfStars; i++) {
    fontAwesomeIcons.push(<FontAwesomeIcon icon={faStar} key={i} className={styles.icon} />);
  }

  return (
    <div className="item" dir={textDirection === "ltr" ? "ltr" : "rtl"}>
      <div className={["box", styles.box].join(" ")}>
        <div className={["client_id", styles.clientId].join(" ")}>
          <div className={["img-box", styles.imgBox].join(" ")}>
            <img src={imgSrc} alt="client headshot" className={styles.img} />
          </div>
          <div className={["client_detail", styles.clientDetail].join(" ")}>
            <div className="client_info">
              <h6 className={styles.h6}>{name}</h6>
              {fontAwesomeIcons.map(item => {
                return item
              })}
            </div>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
        </div>
        <div className={["client_text", styles.clientText].join(" ")}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
