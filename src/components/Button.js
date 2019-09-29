import React from "react";

export const ButtonInline = ({ children, onClick, type = "button" }) => (
  <Button type={type} className="button-inline" onClick={onClick}>
    {children}
  </Button>
);
export const Button = ({ children, onClick, type, className }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);
