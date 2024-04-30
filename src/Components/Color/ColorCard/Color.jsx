import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [showReallyDelete, setShowReallyDelete] = useState(false);

  function handleShowDelete() {
    if (showReallyDelete) {
      onDelete();
    } else {
      setShowReallyDelete(true);
    }
  }

  function handleCancel() {
    setShowReallyDelete(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {showReallyDelete ? (
        <div>
          <p>Really delete?</p>
          <button onClick={handleCancel} type="button">
            CANCEL
          </button>
          <button onClick={onDelete} type="button">
            DELETE
          </button>
        </div>
      ) : (
        <button onClick={handleShowDelete} type="button">
          DELETE
        </button>
      )}
    </div>
  );
}
