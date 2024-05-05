import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("https://movies-myflix-api-84dbf8740f2d.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
      .then((loginData) => {
        if (loginData.user) {
          localStorage.setItem("user", JSON.stringify(loginData.user));
          localStorage.setItem("token", loginData.token);
          onLoggedIn(loginData.user, loginData.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="loginFormUsername">
        <Form.Label>
          Username:
        </Form.Label>
        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} minLength="8" required />
      </Form.Group>

      <Form.Group controlId="loginFormPassword">
        <Form.Label>
          Password:
        </Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>

      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  )
};