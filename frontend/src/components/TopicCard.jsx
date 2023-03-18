import { Icon, InlineIcon } from "@iconify/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ComponentsCss/TopicCard.css";
import config from "../config.json";

export default function TopicCard({ title, desc, postCount, onlineCount, id }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const getCount = () => {
    axios.get(config.uri + "/topics/count/" + id).then((res) => {
      // console.log(res);
      setCount(res.data.count);
    });
  };

  useEffect(() => {
    getCount();
  }, []);
  return (
    <div
      className="topic-card"
      onClick={() => {
        navigate("/topics/" + id);
      }}
    >
      <div className="topic-details">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="topic-stats">
        <p>
          <InlineIcon icon={"carbon:chat"} /> {count} posts
        </p>
        {/* <p>
          <InlineIcon
            icon={"carbon:circle-solid"}
            style={{ color: "#509957" }}
          />{" "}
          {onlineCount} online
        </p> */}
      </div>
    </div>
  );
}
