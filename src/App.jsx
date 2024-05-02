import { initialColors } from "./lib/colors";
import Color from "./Components/Color/ColorCard/Color";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
// import useLocalStorageState from "use-local-storage-state";

function App() {
  const [newColors, setNewColors] = useState(initialColors);

  function handleNewColor(color) {
    setNewColors([color, ...newColors]);
  }

  function handleDelete(index) {
    setNewColors(newColors.filter((_, i) => i !== index));
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
      <ColorForm onSubmitForm={handleNewColor} />

      {newColors.length > 0 ? (
        newColors.map((color, index) => {
          return (
            <Color
              key={color.id}
              color={color}
              onDelete={() => handleDelete(index)}
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
