import React from "react";

function Input({
  type,
  className,
  onClick,
  value,
  name,
  onChange,
  id,
  placeholder,
}) {
  return (
    <input
      type={type}
      className={className}
      onClick={onClick}
      value={value}
      name={name}
      onChange={onChange}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default Input;
