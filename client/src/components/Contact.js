import React from "react"
import { useState } from "react"
import Wrapper from "../assets/wrappers/Contact"

const initialValue = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const [values, setValues] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  function onChange(e) {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
    console.log(name, value)
  }

  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">Reach out to us!</h2>
        <form method="POST" action="http://localhost:4000/api/form">
          <input
            type="text"
            placeholder="Your Name*"
            name="name"
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="Your e-mail*"
            name="email"
            onChange={onChange}
          />
          <textarea
            className="message"
            type="text"
            placeholder="Your message"
            name="message"
            onChange={onChange}
          />

          <button type="submit" onSubmit={handleSubmit} className="btn">
            Enviar
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default Contact
