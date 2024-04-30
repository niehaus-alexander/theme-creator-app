import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { nanoid } from "nanoid";

export default function ColorForm({ onSubmitForm }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const id = nanoid();
    const dataWithID = { ...data, id: id };

    console.log(dataWithID);
    onSubmitForm(dataWithID);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <br />
      <input
        type="text"
        name="role"
        id="role"
        defaultValue="some color"
      ></input>
      <br />
      <label htmlFor="hex">Hex</label>
      <br />
      <ColorInput id="hex" defaultValue="#9ec5e0" />
      <br />
      <label htmlFor="contrastText">Contrast Text</label>
      <br />
      <ColorInput id="contrastText" defaultValue="#ff0000" />
      <br />
      <br />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
