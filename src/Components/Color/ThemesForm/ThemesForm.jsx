import { useState } from "react";

export default function ThemesForm({
  currentTheme,
  themes,
  onCurrentTheme,
  setCurrentTheme,
  onMapColors,
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

  return (
    <div>
      {!addMode ? (
        <div>
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
          <button
            onClick={() => {
              setAddMode(true);
            }}
            type="button"
          >
            ADD
          </button>
          <button type="button">EDIT</button>
          <button type="button">DELETE</button>
        </div>
      ) : (
        <form onSubmit={handleThemeSubmit}>
          <label htmlFor="newTheme">Theme Name:</label>
          <br />
          <input autoFocus type="text" id="newTheme" name="newTheme"></input>
          <button type="submit">SAVE THEME</button>
          <button
            onClick={() => {
              setAddMode(false);
            }}
            type="button"
          >
            CANCEL
          </button>
        </form>
      )}
    </div>
  );
}
