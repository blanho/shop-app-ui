import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

function CheckoutForm() {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();

  //   const { myUser } = useUserContext();
  //   const navigate = useNavigate();

  //   Stripe
  //   const [succeeded, setSucceeded] = useState(false);
  //   const [error, setError] = useState(null);
  //   const [processing, setProcessing] = useState("");
  //   const [disabled, setDisabled] = useState(true);
  //   const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (event) => {};
  const handleSubmit = async (e) => {};

  return (
    <div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" onChange={handleChange} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}

export default CheckoutForm;
