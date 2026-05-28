import React, { useState } from "react";

const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Two Way Binding
  const submitHandler = (e) => {
    e.preventDefault(); //jiss se uska default behaviour prevent hojyga
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2   outline-none border-emerald-500 rounded-full py-2 px-6 font-medium text-lg placeholder:text-gray-400\"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2  outline-none mt-3 border-emerald-500 rounded-full py-2 px-6 font-medium text-lg  placeholder:text-gray-400\"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="w-full  border-none text-white mt-7  outline-none bg-emerald-500 rounded-full py-2 px-8 text-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
