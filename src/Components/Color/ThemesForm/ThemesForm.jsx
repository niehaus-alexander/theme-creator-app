import { useState } from "react";
import { initThemes } from "../../../lib/initThemes";

export default function ThemesForm({ themes }) {
  const [editThemeMode, setEditThemeMode] = useState();

  return (
    <div>
      <select>
        {themes.map((theme) => {
          return <option key={theme.id}>{theme.name}</option>;
        })}
      </select>
      <button type="button">ADD</button>
      <button type="button">EDIT</button>
      <button type="button">DELETE</button>
    </div>
  );
}
