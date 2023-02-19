import { useEffect } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import SignInForm from "../../components/SignInForm/SignInForm.component";

const Authentication = () => {
  return (
    <>
      <h1>Sign In page</h1>

      <SignInForm />
      <SignUpForm />
    </>
  );
};

export default Authentication;
