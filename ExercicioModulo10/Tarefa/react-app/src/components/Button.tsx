import React from "react";

interface ButtonProps {
  children: string;
  OnClick: () => void;
  color?: string;
}

const Button = ({ children, OnClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={OnClick}>
      {children}
    </button>
  );
};

export default Button;
