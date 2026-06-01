import React from "react";

function StoryCard({ story, onSelect, onDelete }) {
  const getLatestDraftPreview = () => {
    if (!story.arcs || story.arcs.length === 0) return null;

    for (let i = story.arcs.length - 1; i >= 0; i--) {
      const arc = story.arcs[i];
      if (arc.chapters && arc.chapters.length > 0) {
        for (let j = arc.chapters.length - 1; j >= 0; j--) {
          const latestChapter = arc.chapters[j];
          return (
            latestChapter.content?.trim() ||
            `[Drafting: ${latestChapter.title}]`
          );
        }
      }
    }
    return null;
  };

  const draftPreview = getLatestDraftPreview();

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="story-card" onClick={onSelect}>
        <button
          className="delete-btn"
          onClick={(e) => onDelete(e, story.id)}
          title="Delete project"
        >
          &times;
        </button>

        <div className="image-window p-3 d-flex flex-column align-items-start justify-content-start overflow-hidden text-start">
          {draftPreview ? (
            <p
              className="small text-dark m-0 w-100"
              style={{
                lineHeight: "1.4",
                fontSize: "0.85rem",
                display: "-webkit-box",
                WebkitLineClamp: "5",
                WebkitBoxOrient: "vertical",
                whiteSpace: "pre-wrap",
              }}
            >
              {draftPreview}
            </p>
          ) : (
            <span className="text-muted m-auto small fst-italic">
              No chapters created yet...
            </span>
          )}
        </div>

        <h3 className="story-title">{story.title}</h3>
      </div>
    </div>
  );
}

export default StoryCard;
