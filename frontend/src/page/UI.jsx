import React from 'react'

import TopicCard from "../components/TopicCard";
import SearchBar from "../components/SearchBar";

export default function UI() {
    return (
        <div>
            <TopicCard title="Hello" desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nesciunt, quos dicta suscipit totam sit ea neque? Distinctio, totam architecto." postCount={10} onlineCount={5} />
        </div>



    )
}
