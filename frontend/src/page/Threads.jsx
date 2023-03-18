import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThreadCard from "../components/ThreadCard";
import ReplyCard from "../components/ReplyCard";

import "./Topic.css";

import config from "../config.json";
import { AuthContext } from "../context/AuthContext";

export default function Threads() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [thread, setThread] = useState(null);

  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(config.uri + "/threads/" + id)
      .then((res) => setThread(res.data))
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(config.uri + "/comments/?thread=" + id)
      .then((res) => {
        setComments(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setLoading(false));
  }, [id]);

  return (
    <section id="thread-page">
      <div className="current-thread">
        {thread && <ThreadCard title={thread.title} content={thread.content} />}
      </div>
      <div className="thread-list">
        {comments.map((thread, id) => {
          return (
            <ReplyCard
              content={thread.content}
              // username={"John doe"}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
}
