import React from "react";

function CharactersPanel({
  currentStory,
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
}) {
  return (
    <div>
      <h3 className="mb-4">Character Roster</h3>
      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <form
            onSubmit={onAddCharacter}
            className="bg-dark bg-opacity-25 p-4 rounded-4"
          >
            <h4 className="mb-3">New Character</h4>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Character Name"
              value={charName}
              onChange={(e) => setCharName(e.target.value)}
              required
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Role (e.g. Rival, Protagonist)"
              value={charRole}
              onChange={(e) => setCharRole(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Special Abilities"
              value={charAbilities}
              onChange={(e) => setCharAbilities(e.target.value)}
            />
            <textarea
              className="form-control mb-3"
              rows="3"
              placeholder="Bio & Background"
              value={charDesc}
              onChange={(e) => setCharDesc(e.target.value)}
            />
            <button type="submit" className="btn nav-btn w-100">
              Add Cast Member
            </button>
          </form>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row g-3">
            {currentStory.characters?.map((char) => (
              <div key={char.id} className="col-12 col-md-6">
                <div className="char-card position-relative">
                  <button
                    className="btn btn-sm btn-danger position-absolute top-0 end-0 m-3 rounded-circle"
                    onClick={() => onDeleteCharacter(char.id)}
                  >
                    &times;
                  </button>
                  <h4 className="fw-bold border-bottom pb-2 text-warning">
                    {char.name}
                  </h4>
                  <p className="mb-1">
                    <strong>Role:</strong> {char.role || "N/A"}
                  </p>
                  <p className="mb-1">
                    <strong>Powers:</strong> {char.abilities || "N/A"}
                  </p>
                  <p className="text-muted mt-2 mb-0 small">
                    {char.description || "No history written yet."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharactersPanel;
