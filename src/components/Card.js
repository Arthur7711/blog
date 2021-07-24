import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";

export default function Card() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const handleInp = (e) => {
    setValue(e.target.value);
  };
  const addPost = () => {
    setData(value);
    setValue("");
  };
  return (
    <div>
      <Input onChange={handleInp} value={value} />
      <Button size="large" color="primary" onClick={addPost}>
        Add
      </Button>
      <b>{data}</b>
    </div>
  );
}
