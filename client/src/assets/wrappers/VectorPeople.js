import styled from "styled-components";

const wrapper = styled.section`
  .vector-one,
  .vector-two,
  .vector-three,
  vector-four {
    position: relative;
  }

  .vector-one .vector-body {
    width: 88.32px;
    height: 88.54px;
  }

  .vector-one .vector-mouth,
  .vector-one .vector-mouth-moon-shape {
    transform: rotate(-35.19deg);
    width: 11.66px;
    height: 7.01px;
  }

  .vector-one .vector-mouth {
    top: 30.96px;
    left: 50.01px;
    border-radius: 2px 30% 50% 50%;
  }

  .vector-one .vector-mouth-moon-shape {
    background: #fad34f;
    top: 28px;
    left: 48.01px;
  }

  .vector-one .vector-eye-left,
  .vector-one .vector-eye-right {
    width: 5.97px;
    height: 3.94px;
    transform: rotate(-35.19deg);
  }

  .vector-one .vector-eye-left {
    top: 25.54px;
    left: 35.53px;
  }

  .vector-one .vector-eye-right {
    top: 15.54px;
    left: 50.53px;
  }

  .vector-one .vector-eye-left-shape,
  .vector-one .vector-eye-right-shape {
    background: #fad34f;
    transform: rotate(-35.19deg);
    width: 7px;
    height: 5px;
  }

  .vector-one .vector-eye-left-shape {
    top: 18px;
    left: 51.6px;
  }

  .vector-one .vector-eye-right-shape {
    top: 28px;
    left: 37px;
  }

  .vector-two {
    right: -750px;
    top: 550px;
    z-index: 5;
  }

  .vector-two .vector-body {
    width: 127px;
    height: 127px;
  }

  .vector-two .vector-mouth {
    width: 30.29px;
    height: 18.71px;
    top: 85.96px;
    left: 70.01px;
    border-radius: 2px 30% 50% 50%;
  }

  .vector-two .vector-mouth-moon-shape {
    width: 40px;
    height: 10px;
    top: 80.96px;
    left: 65.01px;
    border-radius: 50%;
    background-color: #fad34f;
  }

  .vector-two .vector-eye-left,
  .vector-two .vector-eye-right,
  .vector-two .vector-eye-left-shape,
  .vector-two .vector-eye-right-shape {
    width: 16.48px;
    height: 10.26px;
  }

  .vector-two .vector-eye-left {
    top: 65.96px;
    left: 65.01px;
  }
  .vector-two .vector-eye-right {
    top: 65.96px;
    left: 85.01px;
  }

  .vector-two .vector-eye-left-shape {
    top: 75.96px;
    left: 65.01px;
    z-index: 1;
  }
  .vector-two .vector-eye-right-shape {
    z-index: 1;
    top: 75.96px;
    left: 85.01px;
  }

  .vector-three {
    right: -800px;
    top: 630px;
    z-index: 4;
  }

  .vector-three .vector-body {
    transform: rotate(-35deg);
    width: 214px;
    height: 208px;
    background-color: #f472b7;
  }

  .vector-three .vector-mouth {
    width: 30.29px;
    height: 18.71px;
    top: 85.96px;
    left: 70.01px;
    border-radius: 2px 30% 50% 50%;
  }

  .vector-three .vector-mouth-moon-shape {
    width: 40px;
    height: 10px;
    top: 80.96px;
    left: 65.01px;
    border-radius: 50%;
    background-color: #f472b7;
  }

  .vector-three .vector-eye-left,
  .vector-three .vector-eye-right,
  .vector-three .vector-eye-left-shape,
  .vector-three .vector-eye-right-shape {
    transform: rotate(0deg);
    width: 16.48px;
    height: 10.26px;
  }

  .vector-three .vector-eye-left {
    top: 65.96px;
    left: 65.01px;
  }
  .vector-three .vector-eye-right {
    top: 65.96px;
    left: 85.01px;
  }

  .vector-three .vector-eye-left-shape {
    top: 75.96px;
    left: 65.01px;
    z-index: 1;
  }
  .vector-three .vector-eye-right-shape {
    z-index: 1;
    top: 75.96px;
    left: 85.01px;
  }

  .vector-four .vector-body {
    width: 87px;
    height: 87px;
    left: 714px;
    top: 21px;
    opacity: 0.1;
  }
`

export default wrapper