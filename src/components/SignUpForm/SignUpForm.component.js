import { useState } from "react";
import { Form } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";

import "./SignUpForm.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  // generalized event handler to save changes to any parts of the form.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const ResetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      createUserDocumentFromAuth(user, { displayName });
      ResetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Failed to create user as email is already in use.");
      } else {
        console.error("Cannot create user:", err);
      }
    }
  };

  return (
    <>
      <div className="sign_up__container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            onChange={handleChange}
            required
            name="displayName"
            value={displayName}
          />

          <FormInput
            label="Email"
            type="email"
            onChange={handleChange}
            required
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            onChange={handleChange}
            required
            name="password"
            value={password}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            onChange={handleChange}
            required
            name="confirmPassword"
            value={confirmPassword}
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
