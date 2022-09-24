import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import { useProductContext } from "../context/product_context";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useProductContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfy sloth" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButton />
      </aside>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
    &:hover {
      color: var(--clr-red-light);
    }
  }
  .logo {
    height: 45px;
    justify-self: center;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -999;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding-left: 2rem;
    border-left: 4px solid var(--clr-primary-5);
    color: var(--clr-primary-5);
  }
`;

export default Sidebar;
