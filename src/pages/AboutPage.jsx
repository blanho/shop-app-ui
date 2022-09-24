import React from "react";
import { PageHero } from "../components";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpeg";

function AboutPage() {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            est voluptates commodi cumque, perspiciatis optio magnam debitis
            dolorem minus sapiente numquam recusandae aliquid porro deleniti
            molestias accusantium quos earum aspernatur?
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default AboutPage;
