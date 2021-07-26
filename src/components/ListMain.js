import { Button } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";

export default function ListMain() {
  const [value, setValue] = useState("");
  const [inp, setInp] = useState("");
  const [data, setData] = useState([]);
  const [res, setRes] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setData([...data, { valPart: value, inpPart: inp }]);
    setValue("");
    setInp("");
  };

  const handleChangeInp = (e) => {
    setInp(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("arrData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    setRes([...res, JSON.parse(localStorage.getItem("arrData")) || null]);
  }, []);

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
      {res &&
        res.map((m, i) => (
          <p key={i}>
            {m.valPart} {m.inpPart}
          </p>
        ))}
    </div>
  );
}
