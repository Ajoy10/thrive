import axios from "axios";
import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";

import config from "../config.json";
import { useNavigate } from "react-router-dom";

export default function CreateTopic() {
  const { token } = useContext(AuthContext);
  const [topic, setTopic] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate(AuthContext);
  const onAdd = (e) => {
    e.preventDefault();

    if (token) {
      axios
        .post(
          config.uri + `/topics/`,
          { name: topic, description: desc },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          navigate("/");
        })
        .catch((err) => alert(err));
    } else {
      alert("Please login to add a topic!");
    }
  };
  return (
    <div id="create-topic">
      <h2>Create a new topic</h2>
      <form className="new-topic">
        <div className="ip-group">
          <label htmlFor="topic-name">Topic name</label>
          <input
            id="topic-name"
            type={"text"}
            placeholder="Enter your topic..."
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </div>
        <div className="ip-group">
          <label htmlFor="topic-desc">Topic Description</label>
          <textarea
            id="topic-desc"
            placeholder="Enter the description..."
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <Button label={"Add topic"} icon={<></>} onClick={onAdd} />
      </form>
    </div>
  );
}
