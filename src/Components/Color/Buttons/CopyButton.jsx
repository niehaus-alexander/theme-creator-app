import { useState, useEffect } from "react";

export default function CopyButton({ color }) {
  const [copyMode, setCopyMode] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (copyMode) {
      timeoutId = setTimeout(() => {
        setCopyMode(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyMode]);

  async function handleCopyButton(text) {
    try {
      setCopyMode(true);
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <button
      onClick={() => {
        handleCopyButton(color.hex);
      }}
    >
      {copyMode ? "SUCCESFULLY COPIED!" : "COPY"}
    </button>
  );
}
