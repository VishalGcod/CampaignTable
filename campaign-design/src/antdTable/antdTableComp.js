import React from "react";
import { Table, Tag } from "antd";
import { HeaderDot } from "../imageSvgComps/headerDot";
import { styled } from "styled-components";
import { NameSort } from "../imageSvgComps/nameSort";
import { UserSvg } from "../imageSvgComps/userSvg";
import { FileSvg } from "../imageSvgComps/fileSvg";
import { Percent1 } from "../imageSvgComps/percent1";
import { Percent2 } from "../imageSvgComps/percent2";
import { Percent3 } from "../imageSvgComps/percent3";
import { StarRating1 } from "../imageSvgComps/starRating1";
import { StarRating3 } from "../imageSvgComps/starRating3";
import { StarRating2 } from "../imageSvgComps/starRating2";
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
          <Percent1 />
        </span>
      </Ratings>
    ),
    address: (
      <AvgScore>
        <Stars>
          <StarRating1 />
          <StarRating1 />
          <StarRating1 />
          <StarRating2 />
          <StarRating3 />
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
          <Percent2 />
        </span>
      </Ratings>
    ),
    address: (
      <AvgScore>
        <Stars>
          <StarRating1 />
          <StarRating1 />
          <StarRating1 />
          <StarRating1 />
          <StarRating2 />
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
          <Percent3 />
        </span>
      </Ratings>
    ),
    address: (
      <AvgScore>
        <Stars>
          <StarRating1 />
          <StarRating1 />
          <StarRating1 />
          <StarRating1 />
          <StarRating1 />
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
