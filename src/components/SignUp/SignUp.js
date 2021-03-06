import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const hanldeCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password didn't match! Try again.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be more than 6 characters.");
    }
    createUserWithEmailAndPassword(email, password);
  };

  if (loading) {
    return (
      <div>
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "green",
          }}
        >
          Loading...
        </h1>
        ;
      </div>
    );
  }
  if (user) {
    navigate("/shop");
  }
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={hanldeCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="login-btn" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
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

export default SignUp;
