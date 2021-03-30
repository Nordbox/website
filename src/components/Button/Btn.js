import React from "react"
import "./Btn.scss"

const Btn = ({ children, clicked }) => (
  <button className="btn" onClick={clicked}>
    {children}
  </button>
)
export default Btn
