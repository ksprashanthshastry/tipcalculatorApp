import React, { useState } from "react";

function Button({ click, style }) {
  const [isStyle, setIsStyle] = useState({
    activeObject: null,
    buttonValue: [5, 10, 15, 25, 30],
  });

  const setTrue = (index) => {
    setIsStyle({ ...isStyle, activeObject: isStyle.buttonValue[index] });
  };

  const addStyle = (index) => {
    if (isStyle.buttonValue[index] === isStyle.activeObject) {
      return "tip-btn btn active";
    } else {
      return "tip-btn btn";
    }
  };
  return (
    <>
      {isStyle.buttonValue.map((button, index) => {
        return (
          <button
            style={style}
            key={index}
            className={addStyle(index)}
            onClick={() => {
              setTrue(index);
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
