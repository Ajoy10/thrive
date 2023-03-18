import React, { useState, useEffect } from "react";
import { Navigation } from "../landing_components/navigation";
import { Header } from "../landing_components/header";
import { Features } from "../landing_components/features";
import { Team } from "../landing_components/Team";
import { Contact } from "../landing_components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./Apple.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Apple = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Apple;
