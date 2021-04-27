import styled, { css } from 'styled-components';

interface ContainerProps {
  visible?: boolean;
  color?: string;
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
      `}

    width: 4.6rem;
    height: 2.8rem;
    transition: background-color 0.2s linear;
  }
`;
