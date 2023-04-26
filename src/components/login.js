import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Modal } from "react-bootstrap";

export default function Login(props) {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [showModal, setShowModal] = useState(false);

  function validate() {
    let emailError = "";
    let passwordError = "";

    if (!email.includes("@")) {
      emailError = "Invalid email";
    }

    if (password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    }

    setEmailError(emailError);
    setPasswordError(passwordError);

    if (emailError || passwordError) {
      return false;
    }

    return true;
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailError("");
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      // setShowModal(true);
      console.log("Email: ", email);
      console.log("Password: ", password);
      navi("/dashboard");
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-10 col-xs-12 mt-5 body-login">
            <h1
              className="text-center fw-bold mb-2"
              style={{ color: "#56E39F" }}
            >
              Welcome!
            </h1>
            <p className="mb-4 fs-5 mt-3" style={{ color: "#56E39F" }}>
              Sign up or log in to continue
            </p>
            {/* Bootstrap Alert */}
            {emailError || passwordError ? (
              <div className="alert custom-alert" role="alert">
                {emailError && <p>{emailError}</p>}
                {passwordError && <p>{passwordError}</p>}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ color: "#56E39F" }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mt-1 rounded-pill"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3" style={{ color: "#56E39F" }}>
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="form-control mt-1 rounded-pill"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {/* Button */}
              <button
                className="btn btn-light mt-3"
                onClick={() => navi("/signup")}
                style={{
                  color: "#56E39F",
                  backgroundColor: "#063F71",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                Don't have an account? Register here!
              </button>
              <br />
              <button
                className="btn btn-light mt-3"
                type="submit"
                style={{
                  color: "#56E39F",
                  backgroundColor: "#063F71",
                  borderColor: "#56E39F",
                  borderRadius: "20px",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>
        {`
        
      .btn-light:hover {
        color: #063f71 !important;
        background-color: #56e39f !important;
        border-color: #56e39f !important;
      }
      .container {
        position: relative;
        width: 100%;
        min-height: 90vh;
      }
      
      .body-login {
        padding: 60px 80px 60px 80px;
        border-radius: 20px;
        box-shadow: 0 0.2rem 0.9rem rgba(0, 0, 0, 0.55);
      }
      .custom-alert {
        background-color: #56E39F;
        color: #032039;
      }
    `}
      </style>
    </>
  );
}
