import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
// import { emails } from "../../helper/OpenPage";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isVal, setIsVal] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const register = () => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) !== true
    ) {
      setIsVal("Wrong Email Address");
    } else if (pass.length < 6) {
      setIsVal("Password must be longer than 6 syboles");
    } else {
      localStorage.setItem(
        "login",
        JSON.stringify([{ mail: email, password: pass }])
      );

      // JSON.parse(localStorage.getItem("emailsState")).push(
      //   JSON.parse(localStorage.setItem("login")).map((m) => m.mail)
      // );
      setIsVal("");
    }
  };
  return (
    <div className=" flex justify-center align-center mt-40">
      <div className="border-2 rounded-md p-10">
        <h1 className="flex justify-center mt-4  text-3xl">Registration</h1>
        <p style={{ color: "red" }}>{isVal}</p>
        <div className="mt-8">
          <Input placeholder="email" onChange={handleEmail} value={email} />
        </div>
        <div className="mt-4">
          <Input placeholder="password" onChange={handlePass} value={pass} />
        </div>
        <div className="mt-4">
          <Button onClick={register} color="primary">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
