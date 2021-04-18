import styled, { css } from 'styled-components';

interface ContainerProps {
  degrees: number;
}

export const Container = styled.svg<ContainerProps>`
  transform: rotate(-90deg);

  circle {
    transition: 0.3s ease;
  }

  circle:nth-of-type(3) {
    transform-origin: 50% 50%;
    transition: 0.3s ease;

    ${({ degrees }) =>
      css`
        transform: rotate(${degrees}deg) translate(13px);
      `}
  }
`;
