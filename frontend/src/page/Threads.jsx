import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThreadCard from "../components/ThreadCard";
import ReplyCard from "../components/ReplyCard";

import "./Threads.css";

import config from "../config.json";
import { AuthContext } from "../context/AuthContext";
import ReplyTo from "../components/ReplyTo";
import Empty from "../components/Empty";

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
        {thread && (
          <ThreadCard
            title={thread.title}
            content={thread.content}
            date={thread.createdAt}
            username={"Deep Kore"}
          />
        )}
      </div>
      {comments.length == 0 ? (
        <Empty />
      ) : (
        <div className="reply-list">
          {comments.map((reply, ind) => {
            return (
              <ReplyCard
                content={reply.content}
                // username={"Deep "}
                key={ind}
                date={reply.createdAt}
              />
            );
          })}
        </div>
      )}

      <div className="reply-section">
        <ReplyTo threadId={id} />
      </div>
    </section>
  );
}
