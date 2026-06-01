import React from "react";
import WritingPanel from "./WritingPanel";
import CharactersPanel from "./CharactersPanel";
import RaftPanel from "./RaftPanel";

function Workspace({
  currentStory,
  currentTab,
  setCurrentTab,
  onBack,
  activeArcId,
  setActiveArcId,
  activeChapId,
  setActiveChapId,
  onOpenArcModal,
  onOpenChapterModal,
  onContentChange,
  charName,
  setCharName,
  charRole,
  setCharRole,
  charDesc,
  setCharDesc,
  charAbilities,
  setCharAbilities,
  onAddCharacter,
  onDeleteCharacter,
  onRaftChange,
}) {
  return (
    <div className="container-fluid py-4 px-md-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <button className="btn nav-btn" onClick={onBack}>
          ◀ Back to Dashboard
        </button>
        <h1 className="text-white m-0 h2">{currentStory.title} Workspace</h1>

        <div className="d-flex gap-2 bg-dark bg-opacity-25 p-2 rounded-3 mt-3 mt-md-0">
          <button
            className={`workspace-tab-btn ${currentTab === "writing" ? "active" : ""}`}
            onClick={() => setCurrentTab("writing")}
          >
            📖 Writing Panel
          </button>
          <button
            className={`workspace-tab-btn ${currentTab === "characters" ? "active" : ""}`}
            onClick={() => setCurrentTab("characters")}
          >
            🎭 Characters
          </button>
          <button
            className={`workspace-tab-btn ${currentTab === "raft" ? "active" : ""}`}
            onClick={() => setCurrentTab("raft")}
          >
            🧭 RAFT Organizer
          </button>
        </div>
      </div>

      <div className="workspace-container p-4 min-vh-75">
        {currentTab === "writing" && (
          <WritingPanel
            currentStory={currentStory}
            activeArcId={activeArcId}
            activeChapId={activeChapId}
            setActiveArcId={setActiveArcId}
            setActiveChapId={setActiveChapId}
            onOpenArcModal={onOpenArcModal}
            onOpenChapterModal={onOpenChapterModal}
            onContentChange={onContentChange}
          />
        )}

        {currentTab === "characters" && (
          <CharactersPanel
            currentStory={currentStory}
            charName={charName}
            setCharName={setCharName}
            charRole={charRole}
            setCharRole={setCharRole}
            charDesc={charDesc}
            setCharDesc={setCharDesc}
            charAbilities={charAbilities}
            setCharAbilities={setCharAbilities}
            onAddCharacter={onAddCharacter}
            onDeleteCharacter={onDeleteCharacter}
          />
        )}

        {currentTab === "raft" && (
          <RaftPanel currentStory={currentStory} onRaftChange={onRaftChange} />
        )}
      </div>
    </div>
  );
}

export default Workspace;
