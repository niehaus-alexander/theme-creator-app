import { useEffect, useState } from "react";

export default function ContrastChecker({ color }) {
  const [contrastRating, setContrastRating] = useState();

  useEffect(() => {
    async function fetchContrast() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify({
            colors: [color.hex, color.contrastText],
          }),
        }
      );
      const data = await response.json();
      setContrastRating(data.overall);
      console.log(data.overall);
    }
    fetchContrast();
  });

  if (!contrastRating) {
    return <>loading data...</>;
  }

  function handleBackground() {
    if (contrastRating === "Yup") {
      return "green";
    } else if (contrastRating === "Nope") {
      return "red";
    } else {
      return "orange";
    }
  }

  return (
    <p
      style={{
        color: "black",
        backgroundColor: handleBackground(),
        display: "inline-flex",
      }}
    >
      Overall Contrast Score: {contrastRating}
    </p>
  );
}
