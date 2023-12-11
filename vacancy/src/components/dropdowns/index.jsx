import React from "react";
import "./index.css";

const Dropdowns = function (props) {
  const { title, id, isRequired } = props;
  return (
    <>
      <div className="dropdown-wrapper">
        <label className="input-label" htmlFor={id}>
          {title} &nbsp; {isRequired && <span>*</span>}
        </label>
        <div className="dropdown" id={id}>
          <div className="dropdown-title">
            <span>{title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.40156 7.42578L8.8349 12.8591C9.47656 13.5008 10.5266 13.5008 11.1682 12.8591L16.6016 7.42578"
                stroke="#6E6D77"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="dropdown-items">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdowns;
