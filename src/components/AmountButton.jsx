import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

function AmountButton({ increase, decrease, amount }) {
  return (
    <Wrapper className="amount-container">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    border: transparent;
    background: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }
  button:hover {
    opacity: 0.8;

    border: 1px solid #000;
  }
`;

export default AmountButton;
