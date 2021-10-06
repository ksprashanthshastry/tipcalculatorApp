import React from "react";
// import "../App.css";

function Label({ className, name, forID }) {
  return (
    <label className={className} for={forID}>
      {name}
    </label>
  );
}

export default Label;
