import React from "react";

import styled from "styled-components";

const StyledBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 0.5rem;
`;

const StyledTitleBox = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.colors.textBlue};
`;

interface IProps {
  children: JSX.Element;
  title: string;
}

const Box: React.FC<IProps> = ({ children, title }) => {
  return (
    <StyledBox>
      <StyledTitleBox className="title-box">{title}</StyledTitleBox>
      {children}
    </StyledBox>
  );
};

export default Box;
