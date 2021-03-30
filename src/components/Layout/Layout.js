import React from "react"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"
import TempOverlay from "../TempOverlay/TempOverlay"
import { ModalProvider } from "../../shared/providers/ModalProvider"

const Layout = ({ children }) => (
  <ModalProvider>
    <div className="layout-container">
      <Navigation />
      <TempOverlay />
      {children}
      <Footer />
    </div>
  </ModalProvider>
)

export default Layout
