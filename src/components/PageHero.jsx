import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PageHero({ title, product }) {
  return (
    <Wrapper>
      <section className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--clr-primary-10);
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
