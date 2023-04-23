import SignInForm from "../../components/SignInForm/SignInForm.component";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";

import { AuthContainer } from "./Authentication.styles";

const Authentication = () => {
  return (
    <>
      <h1>Sign In page</h1>

      <AuthContainer id="AuthContainer">
        <SignInForm />
        <SignUpForm />
      </AuthContainer>
    </>
  );
};

export default Authentication;
