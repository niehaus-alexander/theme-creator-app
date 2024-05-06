import { useState } from "react";

export default function ThemesForm({ themes, onCurrentTheme, onMapColors }) {
  const [themeEditMode, setThemeEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);

  return (
    <div>
      {!addMode ? (
        <div>
          <select>
            {themes.map((theme) => {
              return (
                <option
                  onClick={() => {
                    onCurrentTheme(theme.id);
                    onMapColors(theme.id);
                  }}
                  key={theme.id}
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
        <form>
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
