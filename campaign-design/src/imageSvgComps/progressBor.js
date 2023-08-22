import { Progress } from 'antd';
import { styled } from 'styled-components';

export const ProgressBar = ({percent}) => {

  const StyledProgressBar = styled(Progress)`
  .ant-progress-inner {
    background-color: transparent;
    width:135px;
    border-radius: 8px;
  }

  .ant-progress-bg {
    background-color: ${props =>
      props.percent >= 100
        ? 'green'
        : props.percent >= 70
        ? 'red'
        : props.percent >= 35
        ? 'yellow'
        : 'red'};
`;

  return (
    <>
      <StyledProgressBar percent={percent} showInfo={false} />
    </>
  );
};