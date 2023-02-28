import "./Button.styles.scss";

// default buttons style doesn't need a separate class name
const BUTTON_TYPE_CLASSES = {
  google: "google_sign_in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <>
      <button
        className={`button__container ${BUTTON_TYPE_CLASSES[buttonType]} `}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
