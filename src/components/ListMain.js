import { Button } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";

export default function ListMain() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [inp, setInp] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    setData(value);
    setValue("");
    setInp("");
  };
  const handleChangeInp = (e) => {
    setInp(e.target.value);
  };
  //   useEffect(() => {
  //     handleAdd()
  //   }, [])
  return (
    <div className="m-2 ">
      <label>
        Title
        <input
          value={value}
          onChange={handleChange}
          className="border-2 rounded-md"
          type="text"
        />
      </label>
      <label>
        Comment
        <input
          value={inp}
          onChange={handleChangeInp}
          className="border-2 rounded-md"
          type="text"
        />
      </label>
      <Button onClick={handleAdd}>Add</Button>
      {data && data.map((m) => <p>{m}</p>)}
    </div>
  );
}
