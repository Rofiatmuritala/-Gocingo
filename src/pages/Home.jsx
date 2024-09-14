import React from "react";
import Hero from "../components/Hero";
import FundraisingCards from "../components/Fundraisind";
import FundraisingStats from "../components/FundraisingStats";
import FAQSection from "../components/FAQ";
import TeamSection from "../components/Team";

export default function () {
  return (
    <div>
      <Hero />
      <FundraisingCards />
      <FundraisingStats />
      <TeamSection />
      <FAQSection />
    </div>
  );
}
