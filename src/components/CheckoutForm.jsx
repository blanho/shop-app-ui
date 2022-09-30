import React, { useState } from "react";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useCartContext } from "../context/cart_context";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import styled from "styled-components";

function CheckoutForm({ clientSecret }) {
  const { total_amount, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 4000);
    }
  };

  return (
    <Wrapper>
      {succeeded ? (
        <article>
          <h4>Your payment was successful!</h4>
        </article>
      ) : (
        <article>
          <h4>
            Hello, <span>{myUser && myUser.name}</span>
          </h4>
          <p>
            Your total is: <span>{formatPrice(total_amount)}</span>
          </p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement id="card-element" onChange={handleChange} />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay Now"
            )}
          </span>
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  padding: 3rem;
  h4,
  p {
    color: var(--clr-grey-4);
    span {
      color: var(--clr-primary-5);
    }
  }
`;

export default CheckoutForm;
