import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Mounting");

    return () => {
      console.log("Unmounting");
    };
  }, []);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      {text}
    </>
  );
};
