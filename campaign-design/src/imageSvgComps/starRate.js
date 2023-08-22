import React from "react";
import { Rate } from "antd";
import { styled } from "styled-components";

export const RateStyled=styled(Rate)`
font-size:14px;
color:#1B63A9;
&.ant-rate .ant-rate-star-second {
    margin: -3px;
    }
}
`;

export const StarRatings = ({ value }) => (
  <RateStyled className="custom-rate" allowHalf defaultValue={value} />
);
