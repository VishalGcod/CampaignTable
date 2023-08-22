import { Progress } from 'antd';
import { styled } from 'styled-components';

export const ProgressBar = ({percent}) => {

    const StyledProgressBar = styled(Progress)`
    width:135px;
    &&& {
      .ant-progress-inner {
        background-color: ${props =>
          props.percent < 30
            ? 'red'
            : props.percent === 65
            ? 'blue'
            : 'green'};
      }
    }
  `;
  return (
    <>
      <StyledProgressBar percent={percent} />
    </>
  );
};