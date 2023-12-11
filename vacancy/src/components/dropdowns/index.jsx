import React from "react";
import { useState } from "react";
import "./index.css";

const Dropdowns = function (props) {
  const { title, id, isRequired, data } = props;
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <div className="dropdown-wrapper">
        <label className="input-label" htmlFor={id}>
          {title} &nbsp; {isRequired && <span>*</span>}
        </label>
        <div className="dropdown" id={id}>
          <div
            className="dropdown-title"
            style={
              open
                ? {
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }
                : {
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                  }
            }
            onClick={handleOpen}
          >
            <span>{title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={
                open
                  ? {
                      transform: "rotate(180deg)",
                    }
                  : { transform: "rotate(0deg)" }
              }
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
          {open && (
            <div className="dropdown-items">
              <ul>
                {data &&
                  data.map((el) => {
                    return <li key={el.id}>{el.text}</li>;
                  })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropdowns;
