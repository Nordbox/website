import React, { useContext, useEffect } from "react"
import Btn from "../Button/Btn"
import Modal from "@material-ui/core/Modal"
import "./TempOverlay.scss"
import Fade from "@material-ui/core/Fade"

import { ModalContext } from "../../shared/providers/ModalProvider"

const TempOverlay = () => {
  const [modalState, setModalState] = useContext(ModalContext)

  const handleClose = () => setModalState(false)

  return (
    <Modal
      className="modal"
      open={modalState}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Fade in={modalState}>
        <div className="container">
          <blockquote>
            för närvarande är hemsidan under konstruktion. Vi kommer lansera
            våran e-handel inom kort.
          </blockquote>
          <p>har du några frågor, får du gärna kontakta oss.</p>
        </div>
      </Fade>
    </Modal>
  )
}

export default TempOverlay
