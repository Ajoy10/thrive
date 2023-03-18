import React from "react";
import { Link } from "react-router-dom";
import TopicCard from "../TopicCard";
import "../../ComponentsCss/Home.css"

function Home(props) {
  return (
    <div className="home">
      {/* <h3>Search Topics</h3> */}
    <section id="trending-topics-section-list">
      <h2>Trending Topics</h2>
      <div className="trending-topics-section-list">
        <TopicCard title={"Interview Prep"} desc="Anything related to interview are welcome!" postCount={20} onlineCount={5}/>
        <TopicCard title={"Football"} desc="Want to discuss about football? This is the place!" postCount={100} onlineCount={25}/>
      </div>
    </section>

    <section id="trending-topics-section-list">
      <h2>For you</h2>
      <div className="trending-topics-section-list">
        <TopicCard title={"Interview Prep"} desc="Anything related to interview are welcome!" postCount={20} onlineCount={5}/>
        <TopicCard title={"Football"} desc="Want to discuss about football? This is the place!" postCount={100} onlineCount={25}/>
      </div>
    </section>
    </div>
  );
}

export default Home;
