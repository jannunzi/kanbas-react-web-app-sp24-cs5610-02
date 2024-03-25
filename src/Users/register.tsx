import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as client from "./client";
export default function RegisterScreen() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const register = async () => {
    const newUser = await client.registerUser(user);
    console.log(newUser);
    navigate("/Kanbas/Account/profile");
    // navigate("/Kanbas/Account/profile");
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control"
        placeholder="Username"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="form-control mt-2"
        placeholder="Password"
        type={"password"}
      />
      <button onClick={register} className="btn btn-primary mt-2">
        Register
      </button>
    </div>
  );
}
