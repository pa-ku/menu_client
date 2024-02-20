import React from "react";
import styled from "styled-components";
import reactDom from "react-dom";

const ItemsWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: max-content;
`;

const Title = styled.h1`
  color: #fff;
  padding: 40px;

  text-transform: uppercase;
`;

const ItemCtn = styled.div`
  width: 100%;
  max-width: 40em;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
const Description = styled.p`
  color: #b3b3b3;
  margin-left: 10px;
  max-width: 30em;
`;

const Price = styled.p`
  color: #ffd756;
  padding-left: 1em;
`;
const ItemsContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  gap: 1.5em;
`;
export default function Items({ objects, title }) {
  return (
    <>
      <ItemsWrapper>
        <Title>{title}</Title>

        <ItemsContainer>
          {objects.map((item) => (
            <>
              <ItemCtn>
                <div>
                  <Name>{item.nombre}</Name>
                  <Description>{item.descripcion} </Description>
                </div>

                <Price>${item.precio}</Price>
              </ItemCtn>
            </>
          ))}
        </ItemsContainer>
      </ItemsWrapper>
    </>
  );
}
