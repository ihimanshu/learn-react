import Axios from "axios";
import { useEffect, useState } from "react";

export const CatFact = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);
  return (
    <>
      <button onClick={fetchCatFact}>New Cat Fact</button>
      <p>{catFact}</p>
    </>
  );
};
