import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useProductContext } from "../context/product_context";
import { single_product_url as url } from "../utils/constants";
import { useNavigate } from "react-router-dom";
function SingleProductPage() {
  const { productId } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`s${url}${productId}`);
  }, [productId]);

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

  return <div>SingleProductPage</div>;
}

export default SingleProductPage;
