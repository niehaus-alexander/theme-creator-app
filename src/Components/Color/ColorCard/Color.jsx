import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import { useEffect } from "react";

export default function Color({ color, onDelete, onEditColor }) {
  const [showReallyDelete, setShowReallyDelete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [copyMode, setCopyMode] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (copyMode) {
      timeoutId = setTimeout(() => {
        setCopyMode(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyMode]);

  async function handleCopyButton(text) {
    try {
      setCopyMode(true);
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

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
      <button
        onClick={() => {
          handleCopyButton(color.hex);
        }}
      >
        {copyMode ? "SUCCESFULLY COPIED!" : "COPY"}
      </button>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {showReallyDelete ? handleShowDelete() : ""}

      {editMode ? (
        ""
      ) : (
        <>
          <button
            type="button"
            onClick={() =>
              showReallyDelete ? onDelete() : setShowReallyDelete(true)
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
