import React from "react";
import { useState } from "react";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  return (
    <form>
      <label>Username:<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} minLength="8" required /></label>
      <label>Password:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
      <label>Email:<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
      <label>Birthday:<input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required /></label>
      <button type="Submit">Submit</button>
    </form>
  )
};