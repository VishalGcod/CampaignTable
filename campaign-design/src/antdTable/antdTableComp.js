import React from "react";
import { Table } from "antd";
import { HeaderDot } from "../imageSvgComps/headerDot";
import { styled } from "styled-components";
import { NameSort } from "../imageSvgComps/nameSort";
import { UserSvg } from "../imageSvgComps/userSvg";
import { FileSvg } from "../imageSvgComps/fileSvg";
import { Progress } from "antd";
import {
  TableHeading,
  Sorting,
  FirstData,
  AppSurvey,
  SvgsImages,
  Svgs,
  AvgScore,
  Stars,
  UserFileText,
  Numbers,
  Ratings,
  RatingsNumber,
  RatingFont,
  StatusBtn,
  Date,
  RatingsNumber2,
  RatingsNumber3,
  NoSurvey,
  UnderScore,
  DotDiv,
} from "../styledComponents/styles";

import { StarRatings } from "../imageSvgComps/starRate";
import { ProgressBar } from "../imageSvgComps/progressBor";

export const Line = styled.div`
  width: 1px;
  height: 14px;
  background: #e4e7ea;
`;
export const Rows = styled.div`
  height: 87px;
  flex-shrink: 0;
`;

const columns = [
  {
    title: (
      <TableHeading>
        Name
        <Sorting>
          <NameSort />
        </Sorting>
      </TableHeading>
    ),
    dataIndex: "name",
    key: "name",
    // sorter: {
    // },
  },
  {
    title: <TableHeading>Completion Rate</TableHeading>,
    dataIndex: "age",
    key: "age",
  },
  {
    title: <TableHeading>Average Score</TableHeading>,
    dataIndex: "address",
    key: "address",
  },
  {
    title: <TableHeading>Status</TableHeading>,
    dataIndex: "name",
    key: "name",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "green" : "geekblue";
          if (tag === "Draft") {
            color = "blue";
          } else {
            color = "green";
          }
          return (
            <StatusBtn color={color} key={tag}>
              {tag.toUpperCase()}
            </StatusBtn>
          );
        })}
      </>
    ),
  },
  {
    title: (
      <TableHeading>
        Last Modified
        <Sorting>
          <NameSort />
        </Sorting>
      </TableHeading>
    ),
    dataIndex: "date",
    // key: "name",
    // render: (title) => (
    //     <span style={{ color: 'orange' }}>{title}</span>
    //   ),
  },
  {
    title: (
      <TableHeading>
        Last Activated
        <Sorting>
          <NameSort />
        </Sorting>
      </TableHeading>
    ),
    dataIndex: "date",
    // key: "name",
  },
  {
    title: <TableHeading>Action</TableHeading>,
    key: "action",
    dataIndex: "action",
  },
];
const data = [
  {
    key: "1",
    name: (
      <FirstData>
        <AppSurvey>Application Survey</AppSurvey>
        <SvgsImages>
          <Svgs>
            <UserSvg />
          </Svgs>
          <UserFileText>Recipients</UserFileText>
          <Numbers>100</Numbers>
          <Line></Line>
          <Svgs>
            <FileSvg />
          </Svgs>
          <UserFileText>Responses</UserFileText>
          <Numbers>20</Numbers>
        </SvgsImages>
      </FirstData>
    ),
    age: (
      <Ratings>
        <RatingsNumber>
          <RatingFont>32.7%</RatingFont>
        </RatingsNumber>
        <span>
          <ProgressBar
          percent={32}
            showInfo={false}
          />
        </span>
      </Ratings>
    ),
    address: (
      <AvgScore>
        <Stars>
          <StarRatings value={3.5} />
        </Stars>
        <div>3.37</div>
      </AvgScore>
    ),
    tags: ["Active"],
    date: <Date>Oct 25,2020</Date>,
    action: (
      <DotDiv>
        <HeaderDot />
      </DotDiv>
    ),
  },
  {
    key: "2",
    name: (
      <FirstData>
        <AppSurvey>Check in Survey</AppSurvey>
        <SvgsImages>
          <Svgs>
            <UserSvg />
          </Svgs>
          <UserFileText>Recipients</UserFileText>
          <Numbers>100</Numbers>
          <Line></Line>
          <Svgs>
            <FileSvg />
          </Svgs>
          <UserFileText>Responses</UserFileText>
          <Numbers>80</Numbers>
        </SvgsImages>
      </FirstData>
    ),
    age: (
      <Ratings>
        <RatingsNumber2>
          <RatingFont>61.2%</RatingFont>
        </RatingsNumber2>
        <span>
          <Progress
            style={{ width: "112px", height: "6px" }}
            percent={61}
            showInfo={false}
          />
        </span>
      </Ratings>
    ),
    address: (
      <AvgScore>
        <Stars>
          <StarRatings value={4.5} />
        </Stars>
        <div>4.37</div>
      </AvgScore>
    ),
    tags: ["Active"],
    date: <Date>Sep 20,2021</Date>,
    action: (
      <DotDiv>
        <HeaderDot />
      </DotDiv>
    ),
  },
  {
    key: "3",
    name: (
      <FirstData>
        <AppSurvey>Employee Satisfaction Campaign</AppSurvey>
        <SvgsImages>
          <Svgs>
            <UserSvg />
          </Svgs>
          <UserFileText>Recipients</UserFileText>
          <Numbers>100</Numbers>
          <Line></Line>
          <Svgs>
            <FileSvg />
          </Svgs>
          <UserFileText>Responses</UserFileText>
          <Numbers>80</Numbers>
        </SvgsImages>
      </FirstData>
    ),
    age: (
      <Ratings>
        <RatingsNumber3>
          <RatingFont>100.0%</RatingFont>
        </RatingsNumber3>
        <span>
          <Progress
            style={{ width: "112px", height: "6px" }}
            percent={100}
            showInfo={false}
          />
        </span>
      </Ratings>
    ),
    address: (
      <AvgScore>
        <Stars>
          <StarRatings value={5} />{" "}
        </Stars>
        <div>5.00</div>
      </AvgScore>
    ),
    tags: ["Active"],
    date: <Date>Jan 1,2022</Date>,
    action: (
      <DotDiv>
        <HeaderDot />
      </DotDiv>
    ),
  },
  {
    key: "4",
    name: (
      <FirstData>
        <AppSurvey>Email Campaign</AppSurvey>
        <SvgsImages>
          <Svgs>
            <UserSvg />
          </Svgs>
          <UserFileText>Recipients</UserFileText>
          <Numbers>100</Numbers>
        </SvgsImages>
      </FirstData>
    ),
    age: <NoSurvey>No Survey</NoSurvey>,
    address: <NoSurvey>No Survey</NoSurvey>,
    tags: ["Active"],
    date: <Date>Oct 17,2000</Date>,
    action: (
      <DotDiv>
        <HeaderDot />
      </DotDiv>
    ),
  },
  {
    key: "5",
    name: (
      <FirstData>
        <AppSurvey>Email Campaign</AppSurvey>
        <SvgsImages>
          <Svgs>
            <UserSvg />
          </Svgs>
          <UserFileText>Recipients</UserFileText>
          <Numbers>-</Numbers>
          <Line></Line>
          <Svgs>
            <FileSvg />
          </Svgs>
          <UserFileText>Responses</UserFileText>
          <Numbers>-</Numbers>
        </SvgsImages>
      </FirstData>
    ),
    age: <UnderScore>-</UnderScore>,
    address: <UnderScore>-</UnderScore>,
    tags: ["Draft"],
    date: <Date>Dec 30,2030</Date>,
    action: (
      <DotDiv>
        <HeaderDot />
      </DotDiv>
    ),
  },
];
export const AntdTableComp = () => (
  <div style={{ padding: "0px 16px" }}>
    <Table columns={columns} dataSource={data} />
  </div>
);
