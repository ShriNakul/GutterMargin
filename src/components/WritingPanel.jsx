import React from "react";

function WritingPanel({
  currentStory,
  activeArcId,
  activeChapId,
  setActiveArcId,
  setActiveChapId,
  onOpenArcModal,
  onOpenChapterModal,
  onContentChange,
}) {
  const currentArc = currentStory.arcs?.find((a) => a.id === activeArcId);
  const currentChapter = currentArc?.chapters?.find(
    (c) => c.id === activeChapId,
  );

  return (
    <div className="row g-4">
      <div className="col-12 col-md-3">
        <div className="workspace-sidebar">
          <h5 className="mb-3 d-flex justify-content-between align-items-center">
            <span>Story Arcs</span>
            <button
              className="btn btn-sm btn-warning rounded-circle text-dark fw-bold"
              onClick={onOpenArcModal}
            >
              +
            </button>
          </h5>
          {currentStory.arcs?.map((arc) => (
            <button
              key={arc.id}
              className={`sidebar-item ${arc.id === activeArcId ? "active" : ""}`}
              onClick={() => {
                setActiveArcId(arc.id);
                setActiveChapId(arc.chapters[0]?.id || null);
              }}
            >
              📂 {arc.title}
            </button>
          ))}
        </div>

        {activeArcId && (
          <div className="workspace-sidebar mt-4">
            <h5 className="mb-3 d-flex justify-content-between align-items-center">
              <span>Chapters</span>
              <button
                className="btn btn-sm btn-warning rounded-circle text-dark fw-bold"
                onClick={onOpenChapterModal}
              >
                +
              </button>
            </h5>
            {currentArc?.chapters?.map((chap) => (
              <button
                key={chap.id}
                className={`sidebar-item ${chap.id === activeChapId ? "active" : ""}`}
                onClick={() => setActiveChapId(chap.id)}
              >
                📄 {chap.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="col-12 col-md-9">
        {currentChapter ? (
          <div className="bg-white rounded-4 p-4 text-dark h-100 shadow-sm d-flex flex-column">
            <h3 className="text-dark border-bottom pb-2 mb-3">
              {currentChapter.title}
            </h3>
            <textarea
              className="form-control flex-grow-1 p-3 border-0 fs-5 text-dark"
              style={{ minHeight: "400px", background: "#f8f9fa" }}
              value={currentChapter.content || ""}
              onChange={(e) => onContentChange(e.target.value)}
              placeholder="Start drafting your epic sequence details here..."
            />
          </div>
        ) : (
          <div className="text-center p-5 text-white bg-dark bg-opacity-25 rounded-4">
            <h3>
              Select or create an Arc and Chapter to unlock your drafting
              canvas.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default WritingPanel;
