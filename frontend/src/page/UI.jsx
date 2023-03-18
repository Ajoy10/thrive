import React from "react";

import TopicCard from "../components/TopicCard";
import SearchBar from "../components/SearchBar";
import ThreadCard from "../components/ThreadCard";

export default function UI() {
  return (
    <div>
      <TopicCard
        title="Hello"
        desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nesciunt, quos dicta suscipit totam sit ea neque? Distinctio, totam architecto."
        postCount={10}
        onlineCount={5}
      />
      <SearchBar />
      <ThreadCard
        title="what is the best"
        content="  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nesciunt, quos dicta suscipit totam sit ea neque? Distinctio, totam architecto."
        date={20}
        commentCount={20}
        username="abcd"
      />
    </div>
  );
}
