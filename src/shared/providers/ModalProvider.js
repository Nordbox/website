import React, { useState, createContext } from "react"

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false)

  return (
    <ModalContext.Provider value={[modalState, setModalState]}>
      {children}
    </ModalContext.Provider>
  )
}
