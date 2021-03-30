import React, { useContext } from "react"
import "./TempHome.scss"

//components
import Btn from "../../components/Button/Btn"
import tempOverlay from "../../components/TempOverlay/TempOverlay"

//icons
import arrow from "../../shared/icons/arrow.svg"
import driving from "../../shared/icons/driving.svg"
import booking from "../../shared/icons/booking.svg"
import box from "../../shared/icons/box.svg"
import finance from "../../shared/icons/finance.svg"
import * as faIcons from "react-icons/fa"
import * as riIcons from "react-icons/ri"

import { ModalContext } from "../../shared/providers/ModalProvider"

//images
import aboutImg from "../../shared/images/about.jpg"

//brands logos
import CTEK from "../../shared/images/product-logos/CTEK.png"
import ChargerAmps from "../../shared/images/product-logos/ChargerAmps.png"
import GARO from "../../shared/images/product-logos/Garo.png"

const TempHome = () => {
  const [modalState, setModalState] = useContext(ModalContext)

  const showModal = () => {
    setModalState(!modalState)
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    let url = "https://formsubmit.co/ajax/info@nordbox.com"

    let body = {
      name: e.target.name.value,
      tel: e.target.tel.value,
      email: e.target.email.value,
      mssg: e.target.mssg.value,
    }

    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    })

    let data = await res.json()

    console.log(data)

    e.target.reset()
  }

  return (
    <main className="temporary-homepage">
      <section className="intro">
        <blockquote>
          HITTA RÄTT LADDBOX <br />
          TILL DIN BIL!
        </blockquote>

        {/* mobile view list  */}
        <ul className="steps-mobile mobile-only">
          <li>
            <img src={driving} alt="asd" />
            <p> 1. Välj bil</p>
          </li>

          <li>
            <img src={box} alt="asd" />
            <p>2. Välj laddbox</p>
          </li>

          <li>
            <img src={finance} alt="asd" />
            <p>3. Välj finansering</p>
          </li>

          <li>
            <img src={booking} alt="asd" />
            <p>4. Boka installation</p>
          </li>
        </ul>

        <Btn clicked={showModal}>
          <p>kom igång</p> <riIcons.RiArrowRightSLine size={24} />
        </Btn>

        <ul className="steps desktop-only">
          <li>
            <img src={driving} alt="asd" />
            <p> 1. Välj bil</p>
          </li>
          <li>
            <img src={arrow} alt="asd" />
          </li>
          <li>
            <img src={box} alt="asd" />
            <p>2. Välj laddbox</p>
          </li>
          <li>
            <img src={arrow} alt="" />
          </li>
          <li>
            <img src={finance} alt="asd" />
            <p>3. Välj finansering</p>
          </li>
          <li>
            <img src={arrow} alt="" />
          </li>
          <li>
            <img src={booking} alt="asd" />
            <p>4. Boka installation</p>
          </li>
        </ul>
      </section>
      {/* About section */}
      <section className="about">
        <div className="alert">
          <h3>Vår sida är under konstruktion</h3>
          <p>mer innehåll kommer inom kort</p>
        </div>
        <div className="content">
          <img src={aboutImg} alt="content" className="desktop-only" />
          <article>
            <p className="infoTxt">
              Nordbox erbjuder skräddarsydda helhetslösningar för privat
              personer, bostadsrättsföreningar samt företag. Vårt sortiment samt
              tjänster består av framtidssäkra laddstationer, professionella
              installatörer i alla omfattningar över hela Sverige.
            </p>
            <p className="infoTxt">
              Vi tycker att det ska vara lätt att hitta rätt laddstation till
              bilen, lika enkelt ska det vara att få den installerat. Ni ska
              inte heller behöva tänka på att gå miste om bidrag som erbjuds i
              form av subventioner.
            </p>
            <p className="infoTxt">
              Låt oss göra det åt er. Alla våra produkter samt installationer
              uppfyller krav på Grön teknik och avdragen görs direkt i kassa. Vi
              erbjuder även olika förmånliga finansieringsformer samt
              leasingavtal.
            </p>
            <Btn clicked={showModal}>
              <p>kom igång</p> <riIcons.RiArrowRightSLine size={24} />
            </Btn>
          </article>
        </div>
      </section>
      {/* Fule section */}
      <section className="fule">
        <h2>Grönare framtid på riktigt</h2>
        <p>
          Alla köp av laddboxar med installation är berättigade till 50%
          Grön-teknik bidrag. Vi erbjuder installationer över hela Sverige.
          Detta genom ett samarbete med lokala företag. Vi hjälper även
          organisationer med Ladda bilen subventioner via naturvårdsverket.
        </p>
      </section>
      {/* Contact section */}
      <section className="contact">
        <h2>Kontakta oss</h2>
        <div className="content">
          <iframe
            width="640"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.5046894415864!2d11.987160216132795!3d57.6908949811158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff39f9f75f91f%3A0xa85173c6c36c8765!2sKristineh%C3%B6jdsgatan%209A%2C%20412%2082%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1616755655246!5m2!1sen!2sse"
          ></iframe>

          <aside>
            <h3>Vår helpdesk är öppen dygnet runt, året runt</h3>

            <ul>
              <li>
                <faIcons.FaLocationArrow />
                <p>Vintergata 5, 417 58 Göteborg</p>
              </li>
              <li>
                <faIcons.FaEnvelope />
                <p>info@nordbox.com</p>
              </li>
              <li>
                <faIcons.FaPhone />
                <p>076-855 16 04</p>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      {/* Brands section */}

      <section className="brands">
        <h2>våran märken</h2>
        <ul>
          <li>
            <img src={CTEK} alt="" />
          </li>
          <li>
            <img src={ChargerAmps} alt="" />
          </li>
          <li>
            <img src={GARO} alt="" />
          </li>
        </ul>
      </section>

      {/* Contact form section  */}

      <section className="contact-container">
        <h2>Vi svarar gärna på alla frågor du har </h2>

        <form onSubmit={sendEmail}>
          <article className="name">
            <label htmlFor="name">Namn</label>
            <input type="text" name="name" required />
          </article>

          <article className="tel">
            <label htmlFor="number">Telefonnummer</label>
            <input type="number" name="tel" required />
          </article>

          <article className="email">
            <label htmlFor="">E-postadress</label>
            <input type="email" name="email" required />
          </article>

          <article className="mssg">
            <label htmlFor="mssg">medelande</label>
            <textarea type="text" name="mssg" />
          </article>

          <Btn>
            <p>skicka</p>
          </Btn>
        </form>
      </section>
    </main>
  )
}
export default TempHome

// <form action="#">
// <div className="user-info">
//   <article className="name">
//     <label htmlFor="name">Namn</label>
//     <input type="text" required />
//   </article>

//   <div className="container">
//     <article className="tel">
//       <label htmlFor="number">Telefonnummer</label>
//       <input type="number" required />
//     </article>
//     <article className="email">
//       <label htmlFor="">E-postadress</label>
//       <input type="email" required />
//     </article>
//   </div>
// </div>

// <article className="mssg">
//   <label htmlFor="mssg">medelande</label>
//   <textarea type="text" name="mssg" />
// </article>

// <Btn>
//   <p>skicka</p>
// </Btn>
// </form>
