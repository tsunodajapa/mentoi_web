import styled, { css } from 'styled-components';

export interface ItemProps {
  top: number;
  left: number;
  size: number;
}

export const Container = styled.div`
  position: relative;
`;

export const Item = styled.div<ItemProps>`
  background-color: transparent;
  border-radius: 50%;
  position: fixed;
  box-shadow: 0px 0px 40px 2px, rgb(33 33 33 / 50%) 0px 0px 0px 5000px;

  ${({ size, top, left }) =>
    css`
      width: ${size}px;
      height: ${size}px;
      top: ${top}px;
      left: ${left}px;
    `}
`;
