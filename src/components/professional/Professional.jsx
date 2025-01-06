// Styles
import styles from "./Professional.module.css"
// Images
import professionalImg from "../../assets/professional-img.png"
// React
import { Link } from "react-router";

export default function Professional() {
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
                alt="Man sitting down pointing towards the heading of this section"
                className={styles.img} />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="detail-box">
              <h2 className={styles.h2} id="professional-heading">
                We Provide Professional <br />
                Home Services.
              </h2>
              <p className={styles.para}>
                randomised words which don&apos;t look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn&apos;t anything embarrassing hidden in the middle
                of text. All randomised words which don&apos;t look even
                slightly
              </p>
              <Link to="/" className={styles.link}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
