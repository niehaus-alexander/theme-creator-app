export default function ThemesForm({ themes, onCurrentTheme }) {
  return (
    <div>
      <select>
        {themes.map((theme) => {
          return (
            <option
              onClick={() => {
                onCurrentTheme(theme.name);
              }}
              key={theme.id}
            >
              {theme.name}
            </option>
          );
        })}
      </select>
      <button type="button">ADD</button>
      <button type="button">EDIT</button>
      <button type="button">DELETE</button>
    </div>
  );
}
