import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
`;

const CardImageContainer = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContentContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
  width: calc(100% - 76px);
`;

const CardContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const CardAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContentTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardContentAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 1991.91%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardUsername = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

export const CardItem: React.FC = () => {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImg
          alt="hinh ne"
          src="https://images.unsplash.com/photo-1704928341414-5ae341023539?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
        />
      </CardImageContainer>

      <CardContentContainer>
        <CardContentTop>
          <CardUserInfo>
            <CardAvatar
              alt="hinh ne"
              src="https://yt3.ggpht.com/Ch_MGC55QzUtXZ0qb9Vl8GSluplQlhDRBztm6kMG3x8smWp9lzpUgx-Zz0VagO828QY46kdGufQ=s88-c-k-c0x00ffffff-no-rj"
            />
            <CardUsername>@dec.linhph</CardUsername>
          </CardUserInfo>
          <div>10M ❤️</div>
        </CardContentTop>

        <CardContentFooter>
          <CardContentTitle>Mobile developer</CardContentTitle>
          <CardContentAmount>2.000$</CardContentAmount>
        </CardContentFooter>
      </CardContentContainer>
    </CardContainer>
  );
};
