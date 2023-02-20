import { useState, useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import Button from "../Button/Button.component";

import FormInput from "../FormInput/FormInput.component";
import "./SignInForm.styles.scss";

const defaultForms = {
  email: "",
  password: "",
};

// google popup signin function
const SignInWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultForms);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultForms);
  };

  // handle when user types in email & password
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // handle when signing in with email & password
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.error("There has been a problem signing in.", error);
    }
  };

  return (
    <>
      <div className="sign_in__container">
        <h2>Sign-in Here</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <div className="buttons__container">
            <Button type="submit">Sign In</Button>
            <Button buttonType="google" onClick={SignInWithGoogle}>
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
