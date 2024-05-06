import { initialColors } from "./lib/colors";
import Color from "./Components/Color/ColorCard/Color";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import ThemesForm from "./Components/Color/ThemesForm/ThemesForm";
import { initThemes } from "./lib/initThemes";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [newColors, setNewColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
  const [deleteMode, setDeleteMode] = useState(false);
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initThemes,
  });
  const [currentTheme, setCurrentTheme] = useLocalStorageState("currentTheme", {
    defaultValue: initThemes[0].id,
  });

  function handleMapColorsOfTheme() {
    const theme = themes.find((theme) => theme.id === currentTheme);
    const themeColors = theme.colors.map((colorID) => {
      const color = newColors.find((color) => color.id === colorID);
      return color;
    });
    return themeColors;
  }
  const colorsOfTheme = handleMapColorsOfTheme(currentTheme);

  function handleCurrentTheme(theme) {
    setCurrentTheme(theme);
  }

  function handleEditTheme(newName) {
    const updatedThemes = themes.map((theme) => {
      if (theme.id === currentTheme) {
        return { ...theme, name: newName };
      }
      return theme;
    });
    setThemes(updatedThemes);
  }

  function handleAddTheme(themeName) {
    const id = nanoid();
    const newTheme = {
      id: id,
      name: themeName,
      colors: [],
    };
    setThemes((prevThemes) => [...prevThemes, newTheme]);
    setCurrentTheme(newTheme.id);
  }

  function handleDeleteTheme() {
    setThemes((prevThemes) =>
      prevThemes.filter((theme) => theme.id !== currentTheme)
    );
    setCurrentTheme("t1");
    setDeleteMode(false);
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
    setThemes((prevThemes) => {
      return prevThemes.map((theme) => {
        if (theme.id === currentTheme) {
          return {
            ...theme,
            colors: theme.colors.filter((color) => color !== id),
          };
        }
        return theme;
      });
    });
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
        onEditTheme={handleEditTheme}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        onAddTheme={handleAddTheme}
        onHandleDeleteTheme={handleDeleteTheme}
        themes={themes}
        onMapColors={handleMapColorsOfTheme}
        onCurrentTheme={handleCurrentTheme}
        deleteMode={deleteMode}
        setDeleteMode={setDeleteMode}
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
