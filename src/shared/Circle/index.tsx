import styled, { css } from 'styled-components';

interface CircleProps {
  size: number;
}

export const Circle = styled.div<CircleProps>`
  position: absolute !important;

  ${({ size }) => css`
    width: ${size}% !important;
    height: ${size}% !important;
  `}

  background: var(--color-tertiary);
  border-radius: 50%;
`;
