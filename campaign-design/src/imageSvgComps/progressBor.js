import { Progress } from 'antd';
import { styled } from 'styled-components';

export const ProgressBar = ({percent}) => {

  const StyledProgressBar = styled(Progress)`
  width:135px;
  .ant-progress-inner {
    background-color: transparent;
    border-radius: 8px;
  }

  .ant-progress-bg {
    background-color: ${props =>
      props.percent <= 100
        ? 'green'
        : props.percent <= 70
        ? 'blue'
        : props.percent <= 35
        ? 'red'
        : 'initial'};
`;

  const StyledProgressBar2 = styled(Progress)`
  width:135px;
  .ant-progress-inner {
    background-color: transparent;
  }
  
  .ant-progress-bg {
    background-color: ${({ percent }) =>
    percent <= 100
      ? 'green'
      : percent <= 65
      ? 'blue'
      : percent <= 30
      ? 'red'
      : 'gray'};
  }
`;

  return (
    <>
      <StyledProgressBar percent={percent} showInfo={false} />
    </>
  );
};