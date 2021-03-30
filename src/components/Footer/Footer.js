import React, { useContext } from "react"
import "./style.scss"
import { ModalContext } from "../../shared/providers/ModalProvider"

//images
import klarna from "../../shared/images/klarna.svg"

//icons
import logo from "../../shared/icons/logo.svg"

const Footer = () => {
  const [modalState, setModalState] = useContext(ModalContext)

  const liknsList = [
    {
      text: "start sidan",
      link: "#",
    },
    {
      text: "kontakta oss",
      link: "#",
    },
    {
      text: "om oss",
      link: "#",
    },
    {
      text: "våra produkter",
      link: "#",
    },
    {
      text: "privacy policy",
      link: "#",
    },
    {
      text: "terms of use",
      link: "#",
    },
  ]

  const handelLink = () => setModalState(true)

  return (
    <footer>
      <img src={logo} alt="" />
      <div className="container">
        <ul className="links">
          {liknsList.map((link) => (
            <li onClick={handelLink}>{link.text}</li>
          ))}
        </ul>
        <div className="socials">
          <img src={klarna} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
