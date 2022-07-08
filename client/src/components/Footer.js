import React from "react"
import Wrapper from "../assets/wrappers/Footer"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa"

const Footer = () => {
  return (
    <Wrapper>
      <div className="container-social">
        <div className="container-icons">
          <FaLinkedinIn />
          <FaTwitter />
          <FaFacebookF />
          <FaPinterestP />
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
