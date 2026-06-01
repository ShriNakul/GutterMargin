import React, { useState } from "react";
import Modal from "./Modal";

function StoryModals({
  showStoryModal,
  setShowStoryModal,
  onCreateStory,
  showArcModal,
  setShowArcModal,
  onCreateArc,
  showChapterModal,
  setShowChapterModal,
  onCreateChapter,
  storyToDelete,
  setStoryToDelete,
  onConfirmDelete,
}) {
  const [newStoryTitle, setNewStoryTitle] = useState("");
  const [newArcTitle, setNewArcTitle] = useState("");
  const [newChapterTitle, setNewChapterTitle] = useState("");

  return (
    <>
      <Modal
        isOpen={showStoryModal}
        onClose={() => setShowStoryModal(false)}
        title="Create A New Story"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreateStory(newStoryTitle);
            setNewStoryTitle("");
            setShowStoryModal(false);
          }}
        >
          <div className="mb-4">
            <label className="form-label d-block text-white mb-2">
              Story Title
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your story name..."
              value={newStoryTitle}
              onChange={(e) => setNewStoryTitle(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-4"
              onClick={() => setShowStoryModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn nav-btn">
              Create ➤
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={showArcModal}
        onClose={() => setShowArcModal(false)}
        title="Create New Story Arc"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreateArc(newArcTitle);
            setNewArcTitle("");
            setShowArcModal(false);
          }}
        >
          <div className="mb-4">
            <label className="form-label d-block text-white mb-2">
              Arc Title
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="e.g., Arc 2: The Rebellion"
              value={newArcTitle}
              onChange={(e) => setNewArcTitle(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-4"
              onClick={() => setShowArcModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn nav-btn">
              Confirm Arc
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={showChapterModal}
        onClose={() => setShowChapterModal(false)}
        title="Add New Chapter"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCreateChapter(newChapterTitle);
            setNewChapterTitle("");
            setShowChapterModal(false);
          }}
        >
          <div className="mb-4">
            <label className="form-label d-block text-white mb-2">
              Chapter Title
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="e.g., Chapter 4: Hidden Truths"
              value={newChapterTitle}
              onChange={(e) => setNewChapterTitle(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-4"
              onClick={() => setShowChapterModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn nav-btn">
              Create Chapter
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={!!storyToDelete}
        onClose={() => setStoryToDelete(null)}
        title="Warning"
      >
        <div className="text-center">
          <p className="fs-5 text-white mb-4">
            Are you sure you want to delete this story?
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-4"
              onClick={() => setStoryToDelete(null)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger rounded-pill px-4"
              onClick={() => {
                onConfirmDelete(storyToDelete);
                setStoryToDelete(null);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default StoryModals;
