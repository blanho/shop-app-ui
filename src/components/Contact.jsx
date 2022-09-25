import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            delectus deserunt ullam maiores cumque accusamus laborum magni dicta
            debitis officia.
          </p>
          <div className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
  }
  .form-input {
    color: var(--clr-grey-3);
    margin-right: 1rem;
  }
  .form-input::placeholder {
    color: var(--clr-back);
    text-transform: capitalize;
  }
  .submit-btn {
    border: none;
    background-color: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
    outline: 1px solid var(--clr-primary-5);
    outline-offset: 0.01rem;
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
    @media (min-width: 1280px) {
      padding: 15rem 0;
    }
  }
`;

export default Contact;
