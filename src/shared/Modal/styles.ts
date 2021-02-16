import styled, { css } from 'styled-components';

interface ContainerProps {
  visible?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  z-index: 1001;

  background: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}

  div {
    position: relative;

    display: flex;
    background-color: var(--color-background);
    min-width: 200px;
    min-height: 150px;

    border-radius: 15px;
    padding: 15px;

    > button {
      position: absolute;
      top: -5px;
      right: -30px;

      width: 25px;
      height: 25px;

      > svg {
        color: var(--color-text-in-primary);
      }
    }
  }
`;
