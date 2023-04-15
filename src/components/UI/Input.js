import React from "react";
import classes from "./Input.module.css";

// React.forwardRef is used so that Ref can be used in this fragment
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* Here we are spreading input so that the other charcter will apply to this input */}
    </div>
  );
});

export default Input;
