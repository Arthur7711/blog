import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
// import reg from "../../imgs/regis.jpg";
// style={{ backgroundImage: `url(${reg})`,width:'100%', height:'100vh',backgroundRepeat:'no-repeat',}}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const register = () => {
    console.log();
    if (
      pass.length >= 6 &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) === true
    ) {
      console.log("welcome");
    } else {
      console.log("wrong");
    }
  };
  return (
    <div className=" flex justify-center align-center mt-40">
      <div className="border-2 rounded-md p-10">
        <h1 className="flex justify-center mt-4  text-3xl">Registration</h1>
        <div className='mt-8'>
          <Input placeholder="email" onChange={handleEmail} value={email} />
        </div>
        <div className='mt-4'>
          <Input placeholder="password" onChange={handlePass} value={pass} />
        </div>
        <div className='mt-4'>
          <Button onClick={register} color="primary">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
