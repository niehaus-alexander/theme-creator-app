export default function ColorForm() {
  return (
    <form>
      <label htmlFor="name">Role</label>
      <br />
      <input type="text" name="role" id="role"></input>
      <br />
      <label htmlFor="hex">Hex</label>
      <br />
      <input type="text" name="hex" id="hex"></input>
      <input type="color" name="color" id="color"></input>
      <br />
      <label htmlFor="contrast">Contrast Text</label>
      <br />
      <input type="text" name="contrast" id="contrast"></input>
      <input type="color" name="contrast-color" id="contrast-color"></input>
      <br />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
