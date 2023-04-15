import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles";

// default buttons style doesn't need a separate class name
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google_sign_in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <>
      <CustomButton {...otherProps}>{children}</CustomButton>
    </>
  );
};

export default Button;
