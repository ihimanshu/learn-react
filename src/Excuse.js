import Axios from "axios";
import { useState } from "react";

export const Excuse = () => {
  //   const [activeBtn, setActiveBtn] = useState("");
  const [excuse, setExcuse] = useState("");
  const api = "https://excuser.herokuapp.com/v1/excuse/";

  const fetchExcuse = (excuseType) => {
    Axios.get(api + excuseType).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  };

  return (
    <>
      <h2>Generate an Excuse</h2>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Ofice</button>
      <p>{excuse}</p>
    </>
  );
};
