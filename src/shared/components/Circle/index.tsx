import styled, { css } from 'styled-components';

interface CircleProps {
  size: number;
  color?: string;
}

export const Circle = styled.div<CircleProps>`
  position: absolute !important;

  ${({ size }) => css`
    width: ${size}% !important;
    height: ${size}% !important;
  `}

  ${({ color }) =>
    css`
      background: ${color || 'var(--color-tertiary)'};
    `}

  border-radius: 50%;
`;
