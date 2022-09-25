import React from "react";
import { useProductContext } from "../context/product_context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

function FeaturedProduct() {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    text-align: center;
    .btn {
      display: block;
      width: 148px;
      margin: 0 auto;
      text-align: center;
    }
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProduct;
