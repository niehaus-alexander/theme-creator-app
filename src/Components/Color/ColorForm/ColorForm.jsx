import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { nanoid } from "nanoid";

export default function ColorForm({
  onSubmitForm,
  editMode,
  color,
  onCancelEditMode,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const id = nanoid();
    const dataWithID = { ...data, id: id };

    if (editMode) {
      dataWithID.id = color.id;
    }

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
        defaultValue={editMode ? color.role : "some color"}
      ></input>
      <br />
      <label htmlFor="hex">Hex</label>
      <br />
      <ColorInput id="hex" defaultValue={editMode ? color.hex : "#9ec5e0"} />
      <br />
      <label htmlFor="contrastText">Contrast Text</label>
      <br />
      <ColorInput
        id="contrastText"
        defaultValue={editMode ? color.contrastText : "#ff0000"}
      />
      <br />
      {editMode ? <button type="submit">UPDATE COLOR</button> : ""}
      <br />
      <br />
      {!editMode ? <button type="submit">ADD COLOR</button> : ""}
      {editMode ? (
        <button onClick={onCancelEditMode} type="button">
          CANCEL
        </button>
      ) : (
        ""
      )}
    </form>
  );
}
