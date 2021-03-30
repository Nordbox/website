import React, { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import TempDrawer from "./Drawer/Drawer"
import "./Navigation.scss"
import { ModalContext } from "../../shared/providers/ModalProvider"

import * as faIcons from "react-icons/fa"

//icons
import logo from "../../shared/icons/logo.svg"
import cart from "../../shared/icons/cart.svg"
import menuBtn from "../../shared/icons/menuBtn.svg"

const Navigation = () => {
  //modal handler
  const [modalState, setModalState] = useContext(ModalContext)

  const showModal = () => setModalState(true)

  //navBar background change handler
  let listener = null
  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 200) {
        if (scrollState !== "mid") {
          setScrollState("mid")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })

    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <>
      <nav
        style={{
          backgroundColor: scrollState === "mid" ? "#01243c" : "transparent",
          position: scrollState === "mid" ? "fixed" : "absolute",
        }}
      >
        <img src={logo} alt="" className="logo" />
        <div className="ctas" onClick={showModal}>
          <div className="cartBtn">
            <img src={cart} alt="" />
          </div>
          <div className="menu">
            <img src={menuBtn} alt="" />
          </div>
        </div>
      </nav>
      {/* <TempDrawer /> */}
    </>
  )
}

export default Navigation
