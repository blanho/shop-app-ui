import React from "react";
import styled from "styled-components";
import CheckoutForm from "./CheckoutForm";

function StripeCheckout() {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default StripeCheckout;
