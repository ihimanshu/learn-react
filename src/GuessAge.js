import Axios from "axios";
import { useState } from "react";

export const GuessAge = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data);
      console.log(res.data);
      setName("");
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Ex. Himanshu"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={fetchData}>Guess Age</button>
      <p>{data?.age}</p>
      <p>{data?.name}</p>
      <p>{data?.count}</p>
    </>
  );
};
