import React from "react";

require("./style.scss");

const TextInput = (props) => {
  const { className, label, id, name, onChange, value, required } = props;

  return (
    <div className="text-input">
      <label className="text-input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`text-input-input ${className ? className : ""}`}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
        type="text"
        value={value}
        required={required}
      />
    </div>
  );
};

export default TextInput;
