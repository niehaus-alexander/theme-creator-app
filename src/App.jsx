import { initialColors } from "./lib/colors";
import Color from "./Components/Color/ColorCard/Color";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [newColors, setNewColors] = useState(initialColors);

  function handleNewColor(color) {
    setNewColors([color, ...newColors]);
  }

  function handleDelete(index) {
    setNewColors(newColors.filter((_, i) => i !== index));
  }
  // HIER WEITER MACHEN

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitForm={handleNewColor} />
      {newColors.map((color, index) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={() => handleDelete(index)}
          />
        );
      })}
    </>
  );
}

export default App;
