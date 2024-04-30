import { initialColors } from "./lib/colors";
import Color from "./Components/Color/ColorCard/Color";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [newColors, setNewColors] = useState([]);

  function handleNewColor(color) {
    setNewColors([color, ...newColors]);
  }

  function handleDelete() {
    setNewColors(newColors.filter);
  }
  // HIER WEITER MACHEN

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitForm={handleNewColor} />
      {newColors.map((color) => {
        return <Color key={color.id} color={color} onDelete={handleDelete} />;
      })}
      {initialColors.map((color) => {
        return <Color key={color.id} color={color} onDelete={handleDelete} />;
      })}
    </>
  );
}

export default App;
