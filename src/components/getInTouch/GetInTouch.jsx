// Components
import GetInTouchIcon from "../getInTouchIcon/GetInTouchIcon";
import GetInTouchImg from "../getInTouchImg/GetInTouchImg";
// Styles
import styles from "./GetInTouch.module.css"
// Font awesome
import { faFacebookF, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch() {
  return (
    <section className={styles.infoSection} aria-labelledby="get-in-touch-heading">
      <div className="container">
        <h4 id="get-in-touch-heading" className={styles.h4}>Get In Touch</h4>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className={styles.infoItems}>
              <div className="row">
                <GetInTouchImg icon={faMapMarker} styles={styles} dataContent="location">
                    Lorem Ipsum is simply dummy text
                </GetInTouchImg>
                <GetInTouchImg icon={faPhone} styles={styles} dataContent="phone">
                    +02 1234567890
                </GetInTouchImg>
                <GetInTouchImg icon={faEnvelope} styles={styles} dataContent="mail">
                    demo@gmail.com
                </GetInTouchImg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styles.socialBox}>
            <h4 className={styles.h4}>Follow Us</h4>
            <div className={styles.box}>
              <GetInTouchIcon icon={faFacebookF} styles={styles} />
              <GetInTouchIcon icon={faTwitter} styles={styles} />
              <GetInTouchIcon icon={faYoutube} styles={styles} />
              <GetInTouchIcon icon={faInstagram} styles={styles} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}