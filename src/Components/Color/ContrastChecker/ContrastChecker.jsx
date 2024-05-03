import { useEffect, useState } from "react";

export default function ContrastChecker({ color }) {
  const [constrastRating, setContrastRating] = useState();

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
      console.log(data);
    }
    fetchContrast();
  });

  if (!constrastRating) {
    return <>loading data...</>;
  }

  return <p>Overall Contrast Score: </p>;
}
