import React from "react";
import { Link } from "react-router-dom";
import TopicCard from "../TopicCard";
import "../../ComponentsCss/Home.css"

function Home(props) {
  return (
    <div className="home">
      <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
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
