import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  color: #d2cccc;
  z-index: 10;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  border: 0px;
  animation:400ms buttonPopUp ;
  @keyframes buttonPopUp {
    0%{
        bottom: 0px;
    }
    100%{
        bottom: 50px;
    }
  }
`;

export default function ScrollUpButton() {
  const [scrollButton, setScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setScrollButton(true);
      } else {
        setScrollButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scrollButton && (
        <Button title="Inicio de la pagina" onClick={scrollUp}>
          {" "}
          🢁
        </Button>
      )}
    </>
  );
}
