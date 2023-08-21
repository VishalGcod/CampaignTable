import React from "react";
import { HeaderDot } from "../imageSvgComps/headerDot";
import { Header, HeaderText, HeaderDots } from "../styledComponents/styles";

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
