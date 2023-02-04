import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <>
      <h1>Sign In page</h1>
      <button onClick={logInWithGoogle}>Sign in with Google Popup</button>
    </>
  );
};

export default SignIn;
