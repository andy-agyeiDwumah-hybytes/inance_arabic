// Components
import ClientInfo from "../clientInfo/ClientInfo";
// Images
import clientOneImg from "../../assets/client-1.jpg"
import clientTwoImg from "../../assets/client-2.jpg"
// Styles
import styles from "./Client.module.css"
// Owl Carousel
import ReactOwlCarousel from "react-owl-carousel";
// i18
import { useTranslation } from "react-i18next";

export default function Client() {

  const {t} = useTranslation("client")

    // Options for owl carousel
    const options = {
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        // Cannot use FontAwesome icons here because they cannot be directly
        // converted into strings or HTML inside a template literal
        `<span class="nav-button"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>`,
        `<span class="nav-button"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>`,
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 2 },
      },
    };

  return (
    <section className="client_section" aria-labelledby="clients-heading">
      <div className="container">
        <div className={["heading_container", "heading_center", styles.headingContainer].join(" ")}>
          <h2 id="clients-heading">{t("heading")}</h2>
        </div>
        <div className="carousel-wrap layout_padding2-top">
            {/* Use of id below is to override styling of prev and next buttons: see index.css */}
          <ReactOwlCarousel className="owl-carousel" id="clientCarousel" {...options} >
            {/* Duplicate to prevent disabled buttons */}
            {/* Buttons become disabled when there are not enough items to cycle */}
            <ClientInfo imgSrc={clientOneImg} name="Jorch morik" numOfStars={5} styles={styles}>
              {t("clientInfoOne")}
            </ClientInfo>
            <ClientInfo imgSrc={clientTwoImg} name="Jorch morik" numOfStars={5} styles={styles}>
              {t("clientInfoTwo")}
            </ClientInfo>
            <ClientInfo imgSrc={clientOneImg} name="Jorch morik" numOfStars={5} styles={styles}>
              {t("clientInfoThree")}
            </ClientInfo>
            <ClientInfo imgSrc={clientTwoImg} name="Jorch morik" numOfStars={5} styles={styles}>
              {t("clientInfoFour")}
            </ClientInfo>
          </ReactOwlCarousel>
        </div>
      </div>
    </section>
  );
}
