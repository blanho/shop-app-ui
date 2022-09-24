import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";

function CheckoutPage() {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>Checkout Page</h1>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div``;

export default CheckoutPage;
