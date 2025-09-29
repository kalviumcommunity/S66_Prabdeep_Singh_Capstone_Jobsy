import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
