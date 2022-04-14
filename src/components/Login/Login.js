import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <input className="login-btn" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>

        <h2 style={{ display: "flex", justifyContent: "center" }}>Or</h2>
        <hr />
        <button
          className="google-btn"
          style={{ marginBottom: "25px", marginTop: "10px" }}
        >
          <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon> Continue With
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
