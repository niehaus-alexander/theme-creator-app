import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import ContrastChecker from "../ContrastChecker/ContrastChecker";
import CopyButton from "../Buttons/CopyButton";

export default function Color({ color, onDelete, onEditColor }) {
  const [showReallyDelete, setShowReallyDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleShowDelete() {
    return (
      <>
        <h3 className="color-card-highlight">Really delete?</h3>
        <button type="button" onClick={() => setShowReallyDelete(false)}>
          CANCEL
        </button>
      </>
    );
  }

  function handleCancelEditMode() {
    setEditMode(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-highlight">{color.hex}</h3>
      <CopyButton color={color} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ContrastChecker color={color} />
      <br />
      {showReallyDelete ? handleShowDelete() : ""}

      {editMode ? (
        ""
      ) : (
        <>
          <button
            type="button"
            onClick={() =>
              showReallyDelete ? onDelete(color.id) : setShowReallyDelete(true)
            }
          >
            DELETE
          </button>

          <button
            type="button"
            onClick={() => {
              setEditMode(true);
            }}
          >
            EDIT
          </button>
        </>
      )}

      {editMode ? (
        <ColorForm
          onEditColor={onEditColor}
          editMode={editMode}
          color={color}
          onCancelEditMode={handleCancelEditMode}
        />
      ) : (
        ""
      )}
    </div>
  );
}
