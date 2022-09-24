import React from "react";
import { FeaturedProduct, Hero, Contact, Services } from "../components";

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Services />
      <Contact />
    </main>
  );
}

export default HomePage;
