import React from "react"

const VectorCloud = ({ styledNumber }) => {
  return (
    <div className={`cloud-${styledNumber}`}>
      <div className="vector-cloud-body">
        <div className="vector-cloud-one"></div>
        <div className="vector-cloud-two"></div>
        <div className="vector-cloud-three"></div>
        <div className="vector-cloud-four"></div>
      </div>
    </div>
  )
}

export default VectorCloud
