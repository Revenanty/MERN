import React from "react";
import MainLayout from "./MainLayout";
import Hero from "../pages/Hero";
import Articles from "../pages/Articles";
import CTA from "../pages/CTA";

function Homepage() {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Articles />
        <CTA />
      </MainLayout>
    </div>
  );
}

export default Homepage;
