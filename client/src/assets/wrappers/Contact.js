import styled from "styled-components"

const wrapper = styled.section`
  .title {
    color: #3e3e3e;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    margin-bottom: 30px;
  }

  .container {
    width: 100%;
  }

  input {
    padding-left: 10px;
    width: 547px;
    height: 93px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    margin-bottom: 8px;
    color: #2d2d2d;
    line-height: 32.4px;
  }

  textarea {
    padding: 10px 5px;
    width: 547px;
    height: 189px;
    resize: none;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    color: #2d2d2d;
    line-height: 32.4px;
  }

  .message {
    /* padding: 5px 20px 300px; */
    /* height: 189px; */
  }
`

export default wrapper
