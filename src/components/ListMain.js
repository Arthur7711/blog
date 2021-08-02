import { Button, IconButton } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

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

  const handleDelete = (id) => {
    const data = JSON.parse(localStorage.getItem("arrData"));
    const newData = data.filter((item) => item.inpPart !== id);
    localStorage.setItem("arrData", JSON.stringify(newData));
    setValue(newData);
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
      <div className="pl-96 pr-96 pt-16">
        {JSON.parse(localStorage.arrData) &&
          JSON.parse(localStorage.arrData).map((m, i) => (
            <div className="border-2 border-blue-400 rounded-md mb-10 ml-24 mr-24 mt-2 p-4">
              <b className="flex justify-center mt-2 mb-6" key={i}>
                {m.valPart}
              </b>
              <p className="flex justify-center">{m.inpPart}</p>
              <IconButton onClick={() => handleDelete(m.inpPart)}>
                {localStorage.getItem("login") && (
                  <DeleteForeverIcon color="error" />
                )}
              </IconButton>
            </div>
          ))}
      </div>
    </div>
  );
}
