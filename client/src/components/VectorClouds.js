import React from "react"
import Wrapper from "../assets/wrappers/VectorClouds"
import VectorCloud from "./VectorCloud"

const VectorClouds = () => {
  return (
    <Wrapper>
      <VectorCloud styledNumber="one" />
      <VectorCloud styledNumber="two" />
      <VectorCloud styledNumber="three" />
      <VectorCloud styledNumber="four" />
      <VectorCloud styledNumber="five" />
      <VectorCloud styledNumber="six" />
    </Wrapper>
  )
}

export default VectorClouds
