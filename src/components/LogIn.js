import { GlobalContext } from "../store/GlobalProvider";
import React, { useState, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, TextField, Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return (
    <MuiAlert
      style={{ width: "100%" }}
      elevation={6}
      variant="filled"
      {...props}
    />
  );
}

function LogIn() {
  const { changeUser, signUp, logIn, signInGoogle } =
    React.useContext(GlobalContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loginState, setLoginState] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      !loginState && (await signUp(email, pass));
      loginState && (await logIn(email, pass));
      setError(null);
      setSuccess(true);
      setEmail("");
      setPass("");
    } catch (e) {
      setError(e.message);
      setSuccess(null);
    }
  };

  return (
    <div className="loginform">
      <Paper className="paper" elevation={10} variant="elevation">
        {error && <Alert severity="error">{error}</Alert>}
        {success && (
          <Alert severity="success">
            {loginState
              ? "Successfully logged in"
              : "Account was created successfully"}
          </Alert>
        )}
        <Typography align="center" color="primary" variant="h5">
          {" "}
          {loginState ? "Log In" : "Sign Up"}{" "}
        </Typography>
        <form
          className="form"
          action=""
          autoComplete="on"
          onSubmit={handleSignUp}
        >
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
            label="Email"
            inputProps={{ minLength: 4, maxLength: 30 }}
            autoComplete="on"
          />
          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            label="Password"
            type="password"
          />
          <Button variant="contained" color="primary" type="submit">
            {loginState ? "Login" : "Signup"}
          </Button>
        </form>

        <Button onClick={signInGoogle} color="secondary" variant="outlined">
          {" "}
          Sign In with Google{" "}
        </Button>
        <div
          onClick={() => setLoginState(!loginState)}
          style={{ display: "inline-block" }}
        >
          <Typography
            className="link"
            color="textSecondary"
            align="center"
            variant="subtitle2"
          >
            {loginState
              ? "Create new account"
              : "Already have an account? Log In!"}
          </Typography>{" "}
        </div>
      </Paper>
    </div>
  );
}

export default LogIn;
