import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";

import { SignInContainer, ButtonsContainer } from "./SignInForm.styles";

const defaultForms = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultForms);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultForms);
  };

  // google popup signin function
  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
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
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User with entered email does not exist.");
          break;
        case "auth/wrong-password":
          alert("Password is not correct.");
          break;
        default:
          console.error("There has been a problem signing in.", error);
      }
    }
  };

  return (
    <>
      <SignInContainer id="SignInContainer">
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

          <ButtonsContainer id="ButtonsContainer">
            <Button type="submit">Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type="button"
              onClick={SignInWithGoogle}
            >
              Google Sign In
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    </>
  );
};

export default SignInForm;
