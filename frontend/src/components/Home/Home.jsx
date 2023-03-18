import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopicCard from "../TopicCard";
import "../../ComponentsCss/Home.css";

import config from "../../config.json";

import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";

function Home(props) {
  const { token } = useContext(AuthContext);
  const headers = {};
  const [topics, setTopics] = useState([]);
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  useEffect(() => {
    axios
      .get(config.uri + "/topics/all", {
        headers: headers,
      })
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home">
      {/* <h3>Search Topics</h3> */}

      <section id="trending-topics-section-list">
        <h2>Trending Topics</h2>
        <div className="trending-topics-section-list">
          {/* <TopicCard title={"Interview Prep"} desc="Anything related to interview are welcome!" postCount={20} onlineCount={5}/>
      <TopicCard title={"Football"} desc="Want to discuss about football? This is the place!" postCount={100} onlineCount={25}/> */}

          {topics.map((topic, id) => {
            return (
              <TopicCard
                title={topic.name || "Undefined"}
                desc={
                  topic.description ||
                  "There is no description provided for this topic!"
                }
                postCount={topic.postCount || 0}
                onlineCount={0}
                id={topic._id}
                key={id}
              />
            );
          })}
        </div>
      </section>

      <section id="trending-topics-section-list">
        <h2>For you</h2>
        <div className="trending-topics-section-list">
          <TopicCard
            title={"Interview Prep"}
            desc="Anything related to interview are welcome!"
            postCount={20}
            onlineCount={5}
          />
          <TopicCard
            title={"Football"}
            desc="Want to discuss about football? This is the place!"
            postCount={100}
            onlineCount={25}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
