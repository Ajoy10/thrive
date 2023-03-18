import axios from "axios";
import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";

import config from "../config.json";
import { useLocation, useNavigate } from "react-router-dom";

export default function CreateThread() {
  const { token } = useContext(AuthContext);
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate(AuthContext);
  const onAdd = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      alert("Fill in the detials!");
      return;
    }

    if (token) {
      axios
        .post(
          config.uri + `/threads/`,
          { title: title, content: content, topicId: query.get("topic") },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          navigate(0);
        })
        .catch((err) => alert(err));
    } else {
      alert("Please login to add a thread!");
    }
  };
  return (
    <div id="create-thread">
      <h2>Create a new thread</h2>
      <form className="new-thread">
        <div className="ip-group">
          <label htmlFor="thread-title">Title</label>
          <input
            id="thread-title"
            type={"text"}
            placeholder="Enter your title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="ip-group">
          <label htmlFor="thread-content">Content</label>
          <textarea
            id="thread-content"
            placeholder="Enter the content..."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <Button label={"Add thread"} icon={<></>} onClick={onAdd} />
      </form>
    </div>
  );
}
