import React from "react";
import "./index.css";

const Textarea = function (props) {
  const { id, name, placeholder, title, isRequired } = props;
  return (
    <div className="textarea-wrapper">
      <label className="input-label" htmlFor={id}>
        {title} &nbsp; {isRequired && <span>*</span>}
      </label>
      <textarea className="description" name={name} id={id} placeholder={placeholder}></textarea>
    </div>
  );
};

export default Textarea;
