import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

function Product({ image, name, price, id }) {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  .container::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      rgba(234, 237, 223, 0.1),
      rgba(220, 222, 196, 0.3)
    );
    top: 0%;
    left: 0%;
    display: none;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    height: 225px;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    display: block;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    cursor: pointer;
    opacity: 0;
    z-index: 1;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  .container:hover::after {
    display: block;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  footer p {
    letter-spacing: var(--spacing);
    color: var(--clr-primary-5);
  }
`;

export default Product;
