import styled, { css } from 'styled-components';

export interface ItemProps {
  top: number;
  left: number;
  width: number;
  height: number;
  isVisible: boolean;
}

export const Item = styled.div<ItemProps>`
  background-color: transparent;
  border-radius: 0.8rem;
  position: fixed;
  box-shadow: 0px 0px 40px 2px, rgb(33 33 33 / 50%) 0px 0px 0px 5000px;
  z-index: 9999;

  ${({ width, height, top, left }) =>
    css`
      width: ${width}px;
      height: ${height}px;
      top: ${top}px;
      left: ${left}px;
    `}

  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
    `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  + button {
    top: 5px !important;
    right: 5px !important;

    svg {
      background: none !important;
      color: var(--color-secondary) !important;
    }
  }
`;

export const Main = styled.div`
  h5 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-primary);
    text-align: center;
  }

  p {
    margin: 1rem 0;
    text-align: center;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  span {
    color: var(--color-primary);
    font-weight: bold;
  }

  button {
    svg {
      color: var(--color-secondary) !important;
    }
  }
`;
