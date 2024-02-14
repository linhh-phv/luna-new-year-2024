import React from "react";
import Lottie from "lottie-react";
import aniBanner2024 from "../../../assets/ani/ani-banner-2024.json";
import styled from "styled-components";

const StyleBanner2024 = styled.div`
  width: 500px;
  height: 500px;
`;

export const Banner2024: React.FC = () => {
  return (
    <StyleBanner2024>
      <Lottie animationData={aniBanner2024} />
    </StyleBanner2024>
  );
};
