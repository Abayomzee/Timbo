import React from "react";

interface Props {
  label?: string;
  name: string;
  error?: any;
  placeholder?: string;
  cssClass?: string;
  options?: Array<any>;
}
const Select: React.FC<Props> = ({
  label,
  name,
  error,
  placeholder,
  cssClass,
  options,
  ...rest
}) => {
  return (
    <div className="input-container">
      {label && (
        <label htmlFor={label} className="input__label">
          {label}
        </label>
      )}
      <div className="input__holder">
        <select
          id={name}
          name={name}
          className={`input__ele ${cssClass}`}
          {...rest}
        >
          <option>{placeholder ? placeholder : ""}</option>
          {options?.map((opt: any, index: any) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      {error ? (
        <div className="input__error">
          <span className="input__error-text">{error}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Select;
