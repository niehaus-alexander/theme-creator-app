import { useState } from "react";
import ThemesSubmit from "../ThemesSubmit/ThemesSubmit";

export default function ThemesForm({
  currentTheme,
  themes,
  onHandleDeleteTheme,
  onCurrentTheme,
  setCurrentTheme,
  onMapColors,
  onEditTheme,
  deleteMode,
  setDeleteMode,
  onAddTheme,
}) {
  const [themeEditMode, setThemeEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);

  function handleThemeSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data.newTheme);
    onAddTheme(data.newTheme);

    setAddMode(false);
  }

  function handleThemeChange(event) {
    const themeID = event.target.value;
    setCurrentTheme(themeID);
  }

  function displayEditMode() {
    return (
      <ThemesSubmit
        onHandleThemeSubmit={handleThemeSubmit}
        onEditTheme={onEditTheme}
        setAddMode={setAddMode}
        themeEditMode={themeEditMode}
        currentTheme={currentTheme}
        themes={themes}
        setThemeEditMode={setThemeEditMode}
      />
    );
  }

  return (
    <div>
      {themeEditMode ? (
        displayEditMode()
      ) : (
        <div>
          {!addMode ? (
            <div>
              {deleteMode ? (
                ""
              ) : (
                <select value={currentTheme} onChange={handleThemeChange}>
                  {themes.map((theme) => {
                    return (
                      <option
                        onClick={() => {
                          onCurrentTheme(theme.id);
                          onMapColors();
                        }}
                        key={theme.id}
                        value={theme.id}
                      >
                        {theme.name}
                      </option>
                    );
                  })}
                </select>
              )}

              <button
                onClick={() => {
                  deleteMode ? setDeleteMode(false) : setAddMode(true);
                }}
                type="button"
              >
                {deleteMode ? "CANCEL" : "ADD"}
              </button>
              {deleteMode ? (
                ""
              ) : (
                <button
                  onClick={() => {
                    setThemeEditMode(true);
                  }}
                  type="button"
                  disabled={currentTheme === "t1"}
                >
                  EDIT
                </button>
              )}

              <button
                onClick={() => {
                  deleteMode ? onHandleDeleteTheme() : setDeleteMode(true);
                }}
                type="button"
                disabled={currentTheme === "t1"}
              >
                {deleteMode ? "YES DELETE" : "DELETE"}
              </button>
            </div>
          ) : (
            <ThemesSubmit
              onHandleThemeSubmit={handleThemeSubmit}
              onEditTheme={onEditTheme}
              setAddMode={setAddMode}
              themeEditMode={themeEditMode}
              currentTheme={currentTheme}
              themes={themes}
              setThemeEditMode={setThemeEditMode}
            />
          )}
        </div>
      )}
    </div>
  );
}
