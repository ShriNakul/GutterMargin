import React from "react";
import StoryCard from "./StoryCard";

function Dashboard({
  stories,
  onSelectStory,
  onDeleteTrigger,
  onOpenStoryModal,
}) {
  return (
    <div className="container py-4">
      <div className="header-bg mb-5 pt-4">
        <h1 className="my-3 mx-5 py-3 px-5 mb-1">GutterMargin</h1>
        <h2 className="mx-5 px-5 pb-5">Story organizer</h2>
      </div>

      <div className="d-flex gap-3 my-5">
        <button className="btn nav-btn" onClick={onOpenStoryModal}>
          ⭐ New story ➤
        </button>
      </div>

      <div className="row g-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onSelect={() => onSelectStory(story.id)}
            onDelete={onDeleteTrigger}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
