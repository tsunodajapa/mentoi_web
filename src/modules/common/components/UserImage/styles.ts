import styled, { css } from 'styled-components';

interface ContainerProps {
  avatarSize: number;
}

export const Container = styled.div<ContainerProps>`
  position: absolute !important;
  width: 100%;
  height: 100%;

  > svg:last-child {
    position: absolute;

    fill: #0000002b;
    top: 56%;
    right: 50%;
    transform: translate(50%, -50%);

    ${({ avatarSize }) => css`
      width: ${avatarSize}%;
      height: ${avatarSize}%;
    `}
  }
`;
