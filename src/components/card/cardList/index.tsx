import React from "react";
import styled from "styled-components";
import { CardItem } from "../cardItem";

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
`;

interface IProps {}

export const CardList: React.FC<IProps> = () => {
  return (
    <CardListContainer>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CardListContainer>
  );
};
