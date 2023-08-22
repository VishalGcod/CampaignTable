import React from "react";
import { Rate } from "antd";
import { styled } from "styled-components";

export const RateStyled=styled(Rate)`
font-size:14px;
color:blue;
&.ant-rate .ant-rate-star-first .anticon, :where(.css-dev-only-do-not-override-17a39f8).ant-rate .ant-rate-star-second .anticon {
    margin: -3px;
    }
}
`;

export const StarRatings = ({ value }) => (
  <RateStyled className="custom-rate" allowHalf defaultValue={value} />
);
