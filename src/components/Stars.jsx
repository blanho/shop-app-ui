import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Stars({ stars, reviews }) {
  const countStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <span className="stars">{countStars}</span>
      <p className="reviews">({reviews} reviews)</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.2rem;
    transform: translateY(2px);
  }
  p {
    margin-left: 0.2rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;

export default Stars;
