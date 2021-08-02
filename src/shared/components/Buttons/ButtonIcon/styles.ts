import styled, { css } from 'styled-components';

interface ContainerProps {
  visible?: boolean;
  color?: string;
  selected?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: transparent;
  display: flex;
  align-items: center;

  border: 0;

  ${({ visible }) =>
    !visible &&
    visible !== undefined &&
    css`
      display: none;
    `}

  > svg {
    color: var(--color-text);

    ${({ color }) =>
      css`
        color: var(${color || '--color-text'});
        transition: transform 0.7s ease-in-out;
        &:hover {
          transform: rotate(360deg);
          transition: all 0.3s ease-in-out 0s;
        }
      `}

    ${({ selected, color }) =>
      selected &&
      css`
        border: 1px dotted var(${color || '--color-text'});
        border-radius: 50%;
      `}

    width: 4.6rem;
    height: 2.8rem;
    transition: all 0.3s ease-in-out 0s;
  }

  &:disabled > svg {
    color: var(--color-text-complement) !important;
  }
`;
