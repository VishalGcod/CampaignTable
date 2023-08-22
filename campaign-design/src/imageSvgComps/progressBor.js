import { Progress } from 'antd';

export const ProgressBar = ({percent}) => {
  return (
    <>
      <Progress percent={percent} />
    </>
  );
};