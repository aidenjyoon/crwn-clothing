import "./FormInput.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form_input" {...otherProps} />

      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form_input_label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
