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

  transition: opacity 300ms ease-in;
  pointer-events: auto;
  opacity: 1;

  ${({ visible }) =>
    !visible &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  > div {
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
      right: -35px;

      > svg {
        width: 35px;
        height: 35px;
        color: var(--color-text-in-primary);
      }
    }
  }
`;
