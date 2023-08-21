import React from "react";
import { styled } from "styled-components";
import { HeaderDot } from "../imageSvgComps/headerDot";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  background-color: #e4e7ea;
`;
const HeaderText = styled.div`
  color: #3a4a5b;
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 86.926px;
  margin-left:25px;
`;
const HeaderDots = styled.div`
width: 15.986px;
height: 16px;
flex-shrink: 0;
opacity: 0.3;
margin-right:35px;
`
;

export const AntdTableHeader = () => {
  return (
    <div style={{padding:'16px 16px 0px 16px'}}>
    <Header>
      <HeaderText>Campaign</HeaderText>
      <HeaderDots>
        <HeaderDot />
      </HeaderDots>
    </Header>
    </div>
  );
};
