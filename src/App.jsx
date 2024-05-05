import { initialColors } from "./lib/colors";
import Color from "./Components/Color/ColorCard/Color";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import ThemesForm from "./Components/Color/ThemesForm/ThemesForm";
import { initThemes } from "./lib/initThemes";
import { useState } from "react";

function App() {
  const [newColors, setNewColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
  const [themes, setThemes] = useState(initThemes);
  const [currentTheme, setCurrentTheme] = useState(initThemes[0].id);

  function handleMapColorsOfTheme(themeId) {
    const theme = themes.find((theme) => theme.id === themeId);
    const themeColors = theme.colors.map((colorID) => {
      const color = newColors.find((color) => color.id === colorID);
      return color;
    });
    return themeColors;
  }
  const colorsOfTheme = handleMapColorsOfTheme(currentTheme);
  console.log(colorsOfTheme);

  function handleCurrentTheme(theme) {
    setCurrentTheme(theme);
  }

  function handleNewColor(color) {
    setNewColors([color, ...newColors]);
    const updatedThemes = themes.map((theme) => {
      if (theme.id === currentTheme) {
        return {
          ...theme,
          colors: [color.id, ...theme.colors],
        };
      }
      return theme;
    });
    setThemes(updatedThemes);
  }

  function handleDelete(id) {
    setNewColors(newColors.filter((color) => color.id !== id));
  }

  function handleEditColor(editedColor) {
    setNewColors(
      newColors.map((color) => {
        if (color.id === editedColor.id) {
          return editedColor;
        } else {
          return color;
        }
      })
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemesForm
        themes={themes}
        onMapColors={handleMapColorsOfTheme}
        onCurrentTheme={handleCurrentTheme}
      />
      <ColorForm onSubmitForm={handleNewColor} />

      {colorsOfTheme.length > 0 ? (
        colorsOfTheme.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDelete={handleDelete}
              onEditColor={handleEditColor}
            />
          );
        })
      ) : (
        <p>No colors.. start by adding one!</p>
      )}
    </>
  );
}

export default App;
