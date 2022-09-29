import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/product_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// dev-ownppeyr.us.auth0.com
// 8eb5HAVzRAnyY0g1KFr7s3KPMj8rUruc
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ownppeyr.us.auth0.com"
      clientId="8eb5HAVzRAnyY0g1KFr7s3KPMj8rUruc"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
