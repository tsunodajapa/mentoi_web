import styled, { css } from 'styled-components';

interface ButtonOptionProps {
  color?: string;
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  justify-content: space-between;

  div {
    display: flex;
    width: 100%;

    overflow: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;

    @media (hover: none), (max-width: 500px) {
      overflow-x: scroll;
      /* touch-action: pan-x; */

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const ButtonOption = styled.button<ButtonOptionProps>`
  background-color: transparent;
  width: 140px;
  min-width: 140px;

  padding: 5px 10px;
  margin: 0 5px;

  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-weight: 700;

  &:hover {
    background: var(--color-primary);
    color: var(--color-text-in-primary);
  }

  ${({ color }) =>
    color &&
    css`
      border-color: ${color};
      color: ${color};

      &:hover {
        background: ${color};
      }
    `}

  ${({ color, selected }) =>
    selected &&
    css`
      border-color: ${color || css`var(--color-primary)`};
      background-color: ${color || css`var(--color-primary)`};
      color: var(--color-text-in-primary);
    `}


  border-radius: 10px;
  white-space: nowrap;
  scroll-snap-align: start;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;

  &:nth-child(1) {
    width: 160px;
    min-width: 160px;
  }
`;
