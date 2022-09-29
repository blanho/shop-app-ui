import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useProductContext } from "../context/product_context";
import { useUserContext } from "../context/user_context";

function CartButton() {
  const { closeSidebar } = useProductContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clearCart();
            logout({
              returnTo: window.location.origin,
            });
          }}
        >
          Logout
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
    margin-right: 2rem;
    &:hover {
      color: var(--clr-primary-5);
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -12px;
    right: -12px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    padding: 12px;
    color: var(--clr-white);
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    opacity: 0.8;
    cursor: pointer;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    &:hover {
      color: var(--clr-primary-5);
    }
  }
`;

export default CartButton;
