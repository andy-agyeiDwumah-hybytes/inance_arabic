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

export default function Services() {
  return (
      <section className={["layout_padding", styles.section].join(" ")} aria-labelledby="services-heading">
      <div className="container">
        <div className="heading_container heading_center">
          <h2 id="services-heading">Our Services</h2>
        </div>
        <div className="row">
          <Service heading="Maintenance" imgSrc={maintenanceImg} styles={styles}>
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal
          </Service>
          <Service heading="Electrical" imgSrc={electricalImg} styles={styles}>
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal
          </Service>
          <Service heading="Plumbing" imgSrc={plumbingImg} styles={styles}>
            when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal
          </Service>
        </div>
        <div className={styles.btnBox}>
          <Link to="/" className={styles.btnBoxLink}>View More</Link>
        </div>
      </div>
    </section>
  );
}
