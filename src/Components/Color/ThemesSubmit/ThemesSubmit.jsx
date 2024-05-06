export default function ThemesSubmit({
  onHandleThemeSubmit,
  setAddMode,
  setThemeEditMode,
  onEditTheme,
  themeEditMode,
  currentTheme,
  themes,
}) {
  function getNameByID() {
    const theme = themes.find((theme) => theme.id === currentTheme);
    return theme.name;
  }
  function handleEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onEditTheme(data.newTheme);
    console.log(data.newTheme);
    setThemeEditMode(false);
  }
  return (
    <form onSubmit={themeEditMode ? handleEditSubmit : onHandleThemeSubmit}>
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
