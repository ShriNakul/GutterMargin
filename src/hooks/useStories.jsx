import { useState, useEffect } from "react";

export function useStories() {
  const [stories, setStories] = useState(() => {
    const savedStories = localStorage.getItem("gutter_margin_stories");
    return savedStories ? JSON.parse(savedStories) : null;
  });

  const [activeStoryId, setActiveStoryId] = useState(null);
  const [activeArcId, setActiveArcId] = useState(null);
  const [activeChapId, setActiveChapId] = useState(null);

  useEffect(() => {
    localStorage.setItem("gutter_margin_stories", JSON.stringify(stories));
  }, [stories]);

  const currentStory = stories.find((s) => s.id === activeStoryId);

  useEffect(() => {
    if (currentStory) {
      if (currentStory.arcs && currentStory.arcs.length > 0) {
        setActiveArcId(currentStory.arcs[0].id);
        if (
          currentStory.arcs[0].chapters &&
          currentStory.arcs[0].chapters.length > 0
        ) {
          setActiveChapId(currentStory.arcs[0].chapters[0].id);
        } else {
          setActiveChapId(null);
        }
      } else {
        setActiveArcId(null);
        setActiveChapId(null);
      }
    }
  }, [activeStoryId]);

  const updateStoryNestedData = (updatedStory) => {
    setStories(
      stories.map((s) => (s.id === updatedStory.id ? updatedStory : s)),
    );
  };

  const addStory = (title) => {
    const newStory = {
      id: Date.now(),
      title,
      arcs: [],
      characters: [],
      raft: { role: "", audience: "", format: "", topic: "" },
    };
    setStories([...stories, newStory]);
  };

  const deleteStory = (id) => {
    setStories(stories.filter((s) => s.id !== id));
  };

  const addArc = (title) => {
    const newArc = { id: Date.now(), title, chapters: [] };
    const updated = {
      ...currentStory,
      arcs: [...(currentStory.arcs || []), newArc],
    };
    updateStoryNestedData(updated);
    setActiveArcId(newArc.id);
  };

  const addChapter = (title) => {
    if (!activeArcId) return;
    const newChap = { id: Date.now(), title, content: "" };
    const updatedArcs = currentStory.arcs.map((arc) => {
      if (arc.id === activeArcId) {
        return { ...arc, chapters: [...(arc.chapters || []), newChap] };
      }
      return arc;
    });
    updateStoryNestedData({ ...currentStory, arcs: updatedArcs });
    setActiveChapId(newChap.id);
  };

  const updateChapterContent = (newText) => {
    const updatedArcs = currentStory.arcs.map((arc) => {
      if (arc.id === activeArcId) {
        const updatedChaps = arc.chapters.map((chap) => {
          if (chap.id === activeChapId) {
            return { ...chap, content: newText };
          }
          return chap;
        });
        return { ...arc, chapters: updatedChaps };
      }
      return arc;
    });
    updateStoryNestedData({ ...currentStory, arcs: updatedArcs });
  };

  const addCharacter = (characterData) => {
    const newChar = { id: Date.now(), ...characterData };
    const updated = {
      ...currentStory,
      characters: [...(currentStory.characters || []), newChar],
    };
    updateStoryNestedData(updated);
  };

  const deleteCharacter = (id) => {
    const updated = {
      ...currentStory,
      characters: currentStory.characters.filter((c) => c.id !== id),
    };
    updateStoryNestedData(updated);
  };

  const updateRaft = (field, value) => {
    const updated = {
      ...currentStory,
      raft: {
        ...(currentStory.raft || {
          role: "",
          audience: "",
          format: "",
          topic: "",
        }),
        [field]: value,
      },
    };
    updateStoryNestedData(updated);
  };

  return {
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
  };
}
