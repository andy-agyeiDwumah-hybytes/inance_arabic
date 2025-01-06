// React
import { Link } from "react-router"
// Images
import sliderImg from "../../assets/slider-img.png"
// Styles
import styles from "./Slider.module.css"

export default function Slider() {
  return (
    <section className="slider_section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <h1 className={styles.h1} id="hero-heading">
                Repair and <br />
                Maintenance <br />
                Services
              </h1>
              <p className={styles.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui harum voluptatem adipisci. Quos molestiae saepe dicta
                nobis pariatur, tempora iusto, ad possimus soluta hic
                praesentium mollitia consequatur beatae, aspernatur culpa.
              </p>
              <Link href="/" className={styles.link}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={sliderImg} alt="Man with hands crossed" className={styles.img}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
