import React from "react";

require("./style.scss");

const TextInput = (props) => {
  const { className, label, id, name, onChange, value } = props;

  return (
    <div className="text-input">
      <label className="text-input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`text-input ${className ? className : ""}`}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
        type="text"
        value={value}
      />
    </div>
  );
};

export default TextInput;
