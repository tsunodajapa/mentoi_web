import { useMemo } from 'react';

import { Container } from './styles';

interface ProgressCircleProps {
  percentage: number;
}

const ProgressCircle = ({ percentage }: ProgressCircleProps) => {
  const TWO_PI = Math.PI * 100 * 2;

  const circle = useMemo(() => ((200 - percentage * 2) / 100) * 100 * Math.PI, [
    percentage,
  ]);

  const degrees = useMemo(() => (360 / 100) * percentage, [percentage]);

  return (
    <Container viewBox="0 0 226 226" degrees={degrees}>
      <circle
        cx="113"
        cy="113"
        r="100"
        fill="none"
        stroke="#C9C9C9"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle
        cx="113"
        cy="113"
        r="100"
        fill="none"
        stroke="#64b447"
        strokeWidth="5"
        strokeDasharray={TWO_PI}
        strokeDashoffset={circle}
        strokeLinecap="round"
      />
      <circle cx="200" cy="50%" r="8" fill="#64b447" strokeWidth="5" />
    </Container>
  );
};

export default ProgressCircle;
