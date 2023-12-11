import React from "react";
import "./index.css";

export default function Input(props) {
  const { title, placeholder, isRequired, name, id } = props;
  return (
    <>
      <label className="input-label" htmlFor={id}>
        {title} &nbsp; {isRequired && <span>*</span>}
      </label>
      <input id={id} name={name} placeholder={placeholder} className="text-input" type="text" />
    </>
  );
}
