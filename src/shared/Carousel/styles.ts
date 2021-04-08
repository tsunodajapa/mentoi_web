import styled, { css } from 'styled-components';

interface ContainerProps {
  onlyWeb: boolean;
}

interface ButtonOptionProps {
  color?: string;
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  margin: 1rem 0;
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

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  ${({ onlyWeb }) =>
    onlyWeb &&
    css`
      @media (max-width: 475px) {
        display: none;
      }
    `}
`;

export const ButtonOption = styled.button<ButtonOptionProps>`
  background-color: transparent;
  width: 14rem;
  min-width: 14rem;

  padding: 0.5rem 1rem;
  margin: 0 0.2rem;

  border: 0.2rem solid var(--color-primary);
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


  border-radius: 1rem;
  white-space: nowrap;
  scroll-snap-align: start;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;

  &:nth-child(1) {
    width: 16rem;
    min-width: 16rem;
  }
`;
