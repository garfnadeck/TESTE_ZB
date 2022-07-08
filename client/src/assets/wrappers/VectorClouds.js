import styled from "styled-components"

const wrapper = styled.section`
  .cloud-one,
  .cloud-two,
  .cloud-three,
  .cloud-four,
  .cloud-five,
  .cloud-six {
    position: relative;
  }

  .cloud-one .vector-cloud-body {
    top: 185.89px;
    opacity: 0.05;
    overflow: hidden;
  }

  .cloud-two .vector-cloud-body {
    opacity: 0.15;
    top: 400px;
    overflow: hidden;
  }

  .cloud-two .vector-cloud-one {
    left: -50px;
  }
  .cloud-two .vector-cloud-two {
    display: none;
  }
  .cloud-two .vector-cloud-three {
    left: -10px;
  }
  .cloud-two .vector-cloud-four {
    display: none;
  }

  .cloud-three .vector-cloud-body {
    opacity: 0.05;
    top: 689px;
    left: 101px;
  }

  .cloud-four .vector-cloud-body {
    top: 131px;
    left: 616px;
    z-index: 2;
    overflow: visible;
    opacity: 0.05;
  }

  .cloud-five .vector-cloud-body {
    top: 256px;
    left: 693px;
    opacity: 0.01;
  }

  .cloud-six .vector-cloud-body {
    top: 746px;
    left: 731px;
    opacity: 0.09;
  }

  .cloud-three .vector-cloud-one,
  .cloud-four .vector-cloud-one,
  .cloud-five .vector-cloud-one,
  .cloud-six .vector-cloud-one {
    top: 10px;
    left: 50px;
    width: 80px;
    height: 80px;
  }

  .cloud-three.vector-cloud-two,
  .cloud-four .vector-cloud-two,
  .cloud-five .vector-cloud-two,
  .cloud-six .vector-cloud-two {
    top: 30px;
    left: 10px;
    width: 80px;
    height: 80px;
  }

  .cloud-three .vector-cloud-three,
  .cloud-four .vector-cloud-three,
  .cloud-five .vector-cloud-three,
  .cloud-six .vector-cloud-three {
    top: 30px;
    left: 90px;
    width: 80px;
    height: 80px;
  }

  .cloud-three .vector-cloud-four,
  .cloud-four .vector-cloud-four,
  .cloud-five .vector-cloud-four,
  .cloud-six .vector-cloud-four {
    top: 20px;
    left: -0px;
    width: 80px;
    height: 40px;
  }
`
export default wrapper
