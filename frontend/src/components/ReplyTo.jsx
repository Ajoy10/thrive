import React, { useContext, useState } from "react";
import Button from "./Button";

import "../ComponentsCss/ReplyTo.css";
import axios from "axios";

import config from "../config.json";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ReplyTo({ threadId }) {
  const [comment, setComment] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const commentHandler = (e) => {
    e.preventDefault();

    if (token) {
      setSubmitting(true);
      axios
        .post(
          config.uri + `/comments/`,
          { content: comment, threadId: threadId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          navigate(0);
        })
        .catch((err) => alert(err))
        .finally(() => {
          setSubmitting(true);
        });
    } else {
      alert("Please login to comment!");
    }
  };

  return (
    <form className="reply-to" onSubmit={commentHandler}>
      <h3>Add your reply</h3>
      <textarea onChange={(e) => setComment(e.target.value)} value={comment} />
      <Button
        disabled={submitting}
        label={"Add comment"}
        icon={<></>}
        onClick={commentHandler}
      />
    </form>
  );
}
