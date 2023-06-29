import React, { useRef, useState } from "react";
// import Auth from '../assets/Auth.json'

export default function Login({ride, setMainRole}) {

  const Auth = [
    {
      "username": "milan",
      "password": "Milan2734",
      "role": "user"
    },
    {
      "username": "anil",
      "password": "Anil2991",
      "role": "user"
    },
    {
      "username": "rahul",
      "password": "Rahul2038",
      "role": "user"
    },
    {
      "username": "john",
      "password": "John000",
      "role": "user"
    },
    {
      "username": "radix",
      "password": "Radixweb8",
      "role": "admin"
    }
  ]

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState('')
  const usernameRef = useRef(undefined)
  const passwordRef = useRef(undefined)

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const manageLogin = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    const roles = Auth.find((auth) => ((auth.username === username) && (auth.password === password)))
    if(roles) {
      setRole(roles.role)
      setMainRole(roles.role);
    }
    console.log(username, password);
  }

  return (
    <div className="Login">
      <form onSubmit={manageLogin}>
        <label>Username</label>
        <input
          autoFocus
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <button type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}