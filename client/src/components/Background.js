import React from "react"
import Wrapper from "../assets/wrappers/Background"
import Contact from "./Contact"
import ContactRight from "./ContactRight"
import VectorClouds from "./VectorClouds"
import VectorPeople from "./VectorPeople"

const Background = () => {
  return (
    <Wrapper>
      <VectorPeople />
      <VectorClouds />
      <div className="container-form">
        <Contact />
      </div>
      <div className="container-image">
        <ContactRight />
      </div>
    </Wrapper>
  )
}

export default Background
