import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useProductContext } from "../context/product_context";
import { single_product_url as url } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { AddToCart, PageHero, ProductImages, Stars } from "../components";
import { formatPrice } from "../utils/helpers";

function SingleProductPage() {
  const { productId } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductContext();

  const navigate = useNavigate();

  // fetch single product
  useEffect(() => {
    fetchSingleProduct(`${url}${productId}`);
  }, [productId]);

  // return home page if fetching has been catch up errors
  useEffect(() => {
    if (error) {
      setTimeout(() => navigate("/"), 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    image,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product={product} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages />
          <section className="content">
            <h2>{name}</h2>
            <Stars />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: {stock > 0 ? "In Stock" : "Out of stock"}</span>
            </p>
            <p className="info">
              <span>SKU: </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default SingleProductPage;
