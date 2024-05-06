import { initThemes } from "../../../lib/initThemes";

export default function ThemesSubmit({
  onHandleThemeSubmit,
  setAddMode,
  setThemeEditMode,
  themeEditMode,
  currentTheme,
  themes,
}) {
  function getNameByID() {
    const theme = themes.find((theme) => theme.id === currentTheme);
    return theme.name;
  }
  return (
    <form onSubmit={onHandleThemeSubmit}>
      <label htmlFor="newTheme">Theme Name:</label>
      <br />
      <input
        autoFocus
        type="text"
        id="newTheme"
        name="newTheme"
        defaultValue={themeEditMode ? getNameByID() : ""}
      ></input>
      <button type="submit">{themeEditMode ? "UPDATE" : "SAVE THEME"}</button>
      <button
        onClick={() => {
          themeEditMode ? setThemeEditMode(false) : setAddMode(false);
        }}
        type="button"
      >
        CANCEL
      </button>
    </form>
  );
}
