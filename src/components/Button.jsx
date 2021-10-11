import React from "react";

function Button({ click }) {
  const buttonValue = [5, 10, 15, 25, 30];

  return (
    <>
      {buttonValue.map((button) => {
        return (
          <button
            className="tip-btn btn"
            onClick={() => {
              click(button);
            }}
          >
            {button}
          </button>
        );
      })}
    </>
  );
}

export default Button;
