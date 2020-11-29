import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/user";
import Alert from "./Alert";

const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [nameErrorMessage, setnameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      history.push("/shop");
    }
  }, [userInfo]);

  useEffect(() => {
    if (name.length > 0) {
      const delay = setTimeout(() => {
        if (!/[^a-z]/i.test(name) === false) {
          setnameErrorMessage("Name must contain only alphabets and no spaces");
        } else if (name.length > 0) {
          setnameErrorMessage("");
        }
      });
      return () => {
        clearTimeout(delay);
      };
    }
  }, [name]);

  useEffect(() => {
    if (email.length > 0) {
      const delay = setTimeout(() => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email) === false) {
          setEmailErrorMessage(
            "Email must be in correct format e.g ab@g.co or a@b.co.in "
          );
        } else {
          setEmailErrorMessage("");
        }
      });
      return () => {
        clearTimeout(delay);
      };
    }
  }, [email]);

  useEffect(() => {
    if (password.length > 0 && confirmpassword > 0) {
      if (password !== confirmpassword) {
        setPasswordErrorMessage("Password must match");
      } else {
        setPasswordErrorMessage("");
      }
    }
  }, [password, confirmpassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <ul className="form-container">
          <li>
            <h2 className="text-center">Create Account</h2>
          </li>

          <li>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>

          <p className="text-danger">{nameErrorMessage}</p>

          <li>
            <label for="email">Email</label>

            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <p className="text-danger">{emailErrorMessage}</p>
          <Alert />
          <li>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <label for="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </li>
          <p className="text-danger">{passwordErrorMessage}</p>

          <li>
            <button
              disabled={
                name === "" ||
                email === "" ||
                password === "" ||
                confirmpassword === "" ||
                nameErrorMessage !== "" ||
                emailErrorMessage !== "" ||
                passwordErrorMessage !== ""
              }
              className="button primary text-center"
              type="submit"
            >
              Sign Up for GeeksGrocery Account
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SignUp;
