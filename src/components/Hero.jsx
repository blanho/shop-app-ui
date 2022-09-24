import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBgc from "../assets/hero-bcg.jpeg";
import heroBgc2 from "../assets/hero-bcg-2.jpeg";

function Hero() {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Do More <br /> Work Harder
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex rerum
          hic cum delectus molestias iusto maiores excepturi inventore
          assumenda.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBgc} alt="table" className="main-img" />
        <img src={heroBgc2} alt="working" className="accent-img" />
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--color-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: repeat(2, 1fr);
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      object-fit: cover;
      display: block;
      border-radius: var(--radius);
      position: relative;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        rgba(234, 237, 223, 0.1),
        rgba(220, 222, 196, 0.3)
      );
      top: 1%;
      left: 0%;

      z-index: 1;
    }
    .img-container::after {
      content: "";
      position: absolute;
      height: 31%;
      width: 28%;
      background: linear-gradient(
        rgba(234, 237, 223, 0.1),
        rgba(220, 222, 196, 0.3)
      );
      top: 69%;
      left: -28%;
      z-index: 1;
    }
  }
`;

export default Hero;
