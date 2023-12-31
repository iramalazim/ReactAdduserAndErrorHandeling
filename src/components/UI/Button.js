import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    // <div className={`${classes.button} ${props.className}`}>
    //   {props.children}
    // </div>
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
