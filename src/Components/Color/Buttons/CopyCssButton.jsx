import { useState, useEffect } from "react";

export default function CopyCssButton({ color }) {
  const [copyCssMode, setCopyCssMode] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (copyCssMode) {
      timeoutId = setTimeout(() => {
        setCopyCssMode(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyCssMode]);

  async function handleCopyCss() {
    const modifiedRoleText = color.role.replace(/ /g, "-");
    try {
      setCopyCssMode(true);
      await navigator.clipboard.writeText(`.${modifiedRoleText} {
        background-Color: ${color.hex};
        color: ${color.contrastText}
      }`);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <button
      onClick={() => {
        handleCopyCss();
      }}
    >
      {copyCssMode ? "CSS Copied to Clipboard!" : "COPY CSS"}
    </button>
  );
}
