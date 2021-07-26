import { Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function ListMain() {
  const [value, setValue] = useState("");
  const [inp, setInp] = useState("");

  if (!localStorage.arrData) {
    localStorage.arrData = JSON.stringify([]);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeInp = (e) => {
    setInp(e.target.value);
  };

  const handleAdd = () => {
    const oldData = [...JSON.parse(localStorage.arrData)];
    const newData = { valPart: value, inpPart: inp };
    localStorage.arrData = JSON.stringify([...oldData, newData]);
    setValue("");
    setInp("");
  };

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
      <div className="m-40">
        {JSON.parse(localStorage.arrData) &&
          JSON.parse(localStorage.arrData).map((m, i) => (
            <div className="border-2 ">
              <b key={i}>{m.valPart}</b>
              <br />
              <p>{m.inpPart}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
