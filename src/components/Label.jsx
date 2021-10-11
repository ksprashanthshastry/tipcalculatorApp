import React from "react";
// import "../App.css";

function Label({ className, name, refd }) {
  return (
    <label className={className} for={refd}>
      {name}
    </label>
  );
}

export default Label;
