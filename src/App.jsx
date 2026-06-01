import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useStories } from "./hooks/useStories";
import Dashboard from "./components/Dashboard";
import Workspace from "./components/Workspace";
import StoryModals from "./components/StoryModals";

function App() {
  const {
    stories,
    currentStory,
    activeStoryId,
    setActiveStoryId,
    activeArcId,
    setActiveArcId,
    activeChapId,
    setActiveChapId,
    addStory,
    deleteStory,
    addArc,
    addChapter,
    updateChapterContent,
    addCharacter,
    deleteCharacter,
    updateRaft,
  } = useStories();

  const [currentTab, setCurrentTab] = useState("writing");
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [showArcModal, setShowArcModal] = useState(false);
  const [showChapterModal, setShowChapterModal] = useState(false);
  const [storyToDelete, setStoryToDelete] = useState(null);

  const [charName, setCharName] = useState("");
  const [charRole, setCharRole] = useState("");
  const [charDesc, setCharDesc] = useState("");
  const [charAbilities, setCharAbilities] = useState("");

  const handleCharacterSubmit = (e) => {
    e.preventDefault();
    if (!charName.trim()) return;
    addCharacter({
      name: charName,
      role: charRole,
      description: charDesc,
      abilities: charAbilities,
    });
    setCharName("");
    setCharRole("");
    setCharDesc("");
    setCharAbilities("");
  };

  return (
    <>
      {activeStoryId && currentStory ? (
        <Workspace
          currentStory={currentStory}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          onBack={() => setActiveStoryId(null)}
          activeArcId={activeArcId}
          setActiveArcId={setActiveArcId}
          activeChapId={activeChapId}
          setActiveChapId={setActiveChapId}
          onOpenArcModal={() => setShowArcModal(true)}
          onOpenChapterModal={() => setShowChapterModal(true)}
          onContentChange={updateChapterContent}
          charName={charName}
          setCharName={setCharName}
          charRole={charRole}
          setCharRole={setCharRole}
          charDesc={charDesc}
          setCharDesc={setCharDesc}
          charAbilities={charAbilities}
          setCharAbilities={setCharAbilities}
          onAddCharacter={handleCharacterSubmit}
          onDeleteCharacter={deleteCharacter}
          onRaftChange={updateRaft}
        />
      ) : (
        <Dashboard
          stories={stories}
          onSelectStory={setActiveStoryId}
          onDeleteTrigger={(e, id) => {
            e.stopPropagation();
            setStoryToDelete(id);
          }}
          onOpenStoryModal={() => setShowStoryModal(true)}
        />
      )}

      <StoryModals
        showStoryModal={showStoryModal}
        setShowStoryModal={setShowStoryModal}
        onCreateStory={addStory}
        showArcModal={showArcModal}
        setShowArcModal={setShowArcModal}
        onCreateArc={addArc}
        showChapterModal={showChapterModal}
        setShowChapterModal={setShowChapterModal}
        onCreateChapter={addChapter}
        storyToDelete={storyToDelete}
        setStoryToDelete={setStoryToDelete}
        onConfirmDelete={deleteStory}
      />
    </>
  );
}

export default App;
