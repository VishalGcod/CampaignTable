import { styled } from "styled-components";
import { Tag } from "antd";

export const TableHeading = styled.div`
  color: var(--grey-t-15, #637487);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
`;
export const FirstData = styled.div`
display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 15px;
`;
export const SvgsImages = styled.div`
display: flex;
align-items: flex-end;
gap: 10px;`;

export const Stars = styled.div`
display: flex;
`;

export const AvgScore = styled.div`
display: inline-flex;
align-items: center;
gap: 10px;
color:grey;
`;
export const StatusBtn=styled(Tag)`
border-radius: 20px;
border: 1px solid var(--green-t-50, #93D7AF);
background: var(--green-t-96, #F6FCF9);
`;

export const AppSurvey=styled.div`
color: var(--blue-100, #1B63A9);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const Ratings=styled.div`
display: flex;
width: 112px;
padding-right: 0px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 10px;
color:grey;
`;
export const RatingsNumber=styled.div`
color: var(--grey-s-50, #242E39);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const UserFileText=styled.span`
color: var(--grey-t-25, #768595);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const Numbers=styled.span`
color: var(--blue-100, #1B63A9);
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
export const Svgs=styled.span`
width: 15px;
height: 15px;
flex-shrink: 0;
`;
export const Sorting=styled.span`
width: 7px;
height: 13px;
flex-shrink: 0;
margin-left: 8px;
margin-bottom: 4px;
`;
export const Date=styled.div`
color: var(--grey-s-50, #242E39);
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const RatingsNumber2=styled.div`
display: flex;
width: 112px;
padding: 0px 50px;
align-items: flex-start;
gap: 10px;
`;
export const RatingsNumber3=styled.div`
display: flex;
width: 112px;
padding: 0px 83px;
align-items: flex-start;
gap: 10px;
`;
export const RatingFont=styled.div`
color: var(--grey-s-50, #242E39);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;