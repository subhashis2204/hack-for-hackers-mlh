import React, { useState } from "react"

export const Alert = ({ variant }) => {
  return (
    <div
      className="alert-container"
      style={{
        background: variant.mainColor,
        border: "0.1rem solid " + variant.secondaryColor,
        marginTop: "4rem",
      }}
    >
      <div
        className="symbol-container"
        style={{ background: variant.secondaryColor }}
      >
        <span class="material-symbols-outlined symbol">{variant.symbol}</span>{" "}
      </div>
      <div className="description-container">
        <span className="description-title">{variant.title}:</span>
        <span className="description-text">{variant.text}</span>
      </div>
    </div>
  )
}
