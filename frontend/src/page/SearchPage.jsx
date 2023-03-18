import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import TopicCard from "../components/TopicCard";
import "../ComponentsCss/Home.css";

import config from "../config.json";

import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";
import { InlineIcon } from "@iconify/react";
import SearchBar from "../components/SearchBar";

function SearchPage(props) {
  const { token } = useContext(AuthContext);
  const headers = {};
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const [topics, setTopics] = useState([]);
  const term = query.get("term");
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  useEffect(() => {
    axios
      .get(config.uri + "/topics/search?term=" + term, {
        headers: headers,
      })
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [term]);

  const navigate = useNavigate();

  const onAddTopicClick = () => {
    navigate("/topics/new");
  };

  return (
    <div className="home">
      {/* <h3>Search Topics</h3> */}

      <div className="add-button">
        <Button
          label={"Add topic"}
          icon={<InlineIcon icon={"carbon:plus"} />}
          onClick={onAddTopicClick}
        />
      </div>

      <section id="search">
        <SearchBar />
      </section>

      <section id="trending-topics-section-list">
        <h2>Search result</h2>
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
    </div>
  );
}

export default SearchPage;
