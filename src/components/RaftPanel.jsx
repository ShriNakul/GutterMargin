import React from "react";

function RaftPanel({ currentStory, onRaftChange }) {
  return (
    <div>
      <h3 className="mb-2">RAFT Organizer Matrix</h3>
      <p className="text-white-50 mb-4">
        Establish perspective criteria constraints before designing scene
        blueprints.
      </p>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="raft-box text-dark">
            <label>Role of the Writer</label>
            <p className="small text-muted mb-2">Who are you writing as?</p>
            <textarea
              className="form-control w-100 text-dark"
              rows="4"
              value={currentStory.raft?.role || ""}
              onChange={(e) => onRaftChange("role", e.target.value)}
              placeholder="Define the voice..."
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="raft-box text-dark">
            <label>Audience</label>
            <p className="small text-muted mb-2">
              Who is meant to read this record?
            </p>
            <textarea
              className="form-control w-100 text-dark"
              rows="4"
              value={currentStory.raft?.audience || ""}
              onChange={(e) => onRaftChange("audience", e.target.value)}
              placeholder="Target readers demographic..."
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="raft-box text-dark">
            <label>Format</label>
            <p className="small text-muted mb-2">What format layout applies?</p>
            <textarea
              className="form-control w-100 text-dark"
              rows="4"
              value={currentStory.raft?.format || ""}
              onChange={(e) => onRaftChange("format", e.target.value)}
              placeholder="Structuring medium..."
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="raft-box text-dark">
            <label>Topic + Strong Verb</label>
            <p className="small text-muted mb-2">
              What core theme are you conveying?
            </p>
            <textarea
              className="form-control w-100 text-dark"
              rows="4"
              value={currentStory.raft?.topic || ""}
              onChange={(e) => onRaftChange("topic", e.target.value)}
              placeholder="Objective argument points..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaftPanel;
