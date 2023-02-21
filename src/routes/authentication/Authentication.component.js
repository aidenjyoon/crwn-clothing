import { useEffect } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import SignInForm from "../../components/SignInForm/SignInForm.component";

import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <>
      <h1>Sign In page</h1>

      <div className="auth__container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
