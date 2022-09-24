import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>blanho </span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  background: var(--clr-black);
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    line-height: 1.25rem;
  }
  h5 span {
    margin-left: 0.2rem;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
