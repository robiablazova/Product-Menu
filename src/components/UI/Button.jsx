import React from "react";
import styled from "styled-components";

const Button = ({ children, disabled, bgColor, height, width, onClick }) => {
  return (
    <div>
      <Buttons
        disabled={disabled}
        bgColor={bgColor}
        height={height}
        width={width}
        onClick={onClick}
      >
        {children}
      </Buttons>
    </div>
  );
};

export default Button;

const Buttons = styled.button`
  background-color: ${(p) => p.bgColor};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: large;
  font-weight: 700;
  &:hover {
    background-color: #cecdcd;
    border: 3px solid black;
    color: black;
    font-size: large;
    font-weight: 700;
  }
  &:active {
    background-color: #424141;
  }
  :disabled {
    background-color: #877e7e;
  }
`;
