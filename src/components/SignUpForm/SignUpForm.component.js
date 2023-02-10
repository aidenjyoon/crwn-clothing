import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          onChange={handleChange}
          required
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
