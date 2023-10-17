import { useState } from "react";
import "./Login.css";
import ResultsTable from "../ResultsTable/ResultsTable";
import Button from "../Button/Button";

const admin = {
  username: "admin",
  password: "1234",
};

export default function Login({handleLoginPage}) {
  const [curretUser, setCurrentUser] = useState(null);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === admin.username && password === admin.password) {
      setCurrentUser(admin);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null)
  }


  return !curretUser ? (
    <div className="login">
      <h2>Login</h2>

      <form className="login__form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username ..."
          name="usernamr"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Enter your password ..."
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <p className="login-error">{loginError}</p>
        <button className="login__btn" type="submit">
          Login
        </button>
      </form>
    </div>
  ) : (
    <div className="results-login">
        <ResultsTable handleLoginPage={handleLoginPage} />
        < Button onClick={() => handleLoginPage(false)} backgroundColor="hsl(213, 96%, 18%)" color="white" >Logout</Button>
    </div>

  );
}
