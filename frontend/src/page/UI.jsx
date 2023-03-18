import React from "react";

import TopicCard from "../components/TopicCard";
import SearchBar from "../components/SearchBar";
import ThreadCard from "../components/ThreadCard";
import Button from "../components/Button";

export default function UI() {
  return (
    <div>
      <TopicCard
        title="Hello"
        desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nesciunt, quos dicta suscipit totam sit ea neque? Distinctio, totam architecto."
        postCount={10}
        onlineCount={5}
      />
      <br></br>
      <SearchBar />
      <br></br>
      <ThreadCard
        title="what is the best"
        content="  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nesciunt, quos dicta suscipit totam sit ea neque? Distinctio, totam architecto."
        date={`Today`}
        commentCount={20}
        username="abcd"
      />
      <Button
        label="create a topic"
      />
    </div>
  );
}
