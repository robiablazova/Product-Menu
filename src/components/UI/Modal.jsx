import React from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom'

export const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal (
    <Main>
      <Container>
         {children}
      </Container>
    </Main>,
    document.getElementById('modal')
  );
};

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
`;


