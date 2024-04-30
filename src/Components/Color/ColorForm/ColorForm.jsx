import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Role</label>
      <br />
      <input type="text" name="role" id="role"></input>
      <br />
      <label htmlFor="color">Hex</label>
      <br />
      <ColorInput id="color" defaultValue="#123456" />
      <br />
      <label htmlFor="contrast">Contrast Text</label>
      <br />
      <ColorInput id="contrast" defaultValue="#123456" />
      <br />
      <br />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
