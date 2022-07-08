import React from "react"

const VectorPerson = ({ styledNumber }) => {
  return (
    <div className={`vector-${styledNumber}`}>
        
      <div className="vector-body">
        <div className="vector-mouth"></div>
        <div className="vector-mouth-moon-shape"></div>
        <div className="vector-eye-left"></div>
        <div className="vector-eye-left-shape"></div>
        <div className="vector-eye-right"></div>
        <div className="vector-eye-right-shape"></div>
      </div>
    </div>
  )
}

export default VectorPerson
