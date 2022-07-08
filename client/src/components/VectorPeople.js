import React from "react"
import Wrapper from "../assets/wrappers/VectorPeople"
import VectorPerson from "./VectorPerson"

const VectorPeople = () => {
  return (
    <Wrapper>
      <VectorPerson styledNumber="one" />
      <VectorPerson styledNumber="two" />
      <VectorPerson styledNumber="three" />
      <div className="vector-four">
        <div className="vector-body"></div>
      </div>
    </Wrapper>
  )
}

export default VectorPeople
