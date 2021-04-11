import styled, { css } from 'styled-components';

export interface ModalStyles {
  background?: string;
  left?: number;
  top?: number;
}

interface ContainerProps {
  visible?: boolean;
  styles: ModalStyles;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  z-index: 1001;

  ${({ styles }) =>
    styles
      ? css`
          position: absolute;
          width: auto !important;
          height: auto !important;
          background: ${styles.background};
          top: ${styles.top}px;
          left: ${styles.left}px;
        `
      : css`
          background: rgba(0, 0, 0, 0.9);
        `}

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  transition: opacity 300ms ease-in;
  pointer-events: auto;
  opacity: 1;
  padding: 1.5rem;

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
    min-width: 300px;
    min-height: 150px;

    border-radius: 15px;
    padding: 15px;

    > button {
      position: absolute;
      top: -10px;
      right: -10px;

      > svg {
        background-color: var(--color-primary);
        width: 25px;
        height: 25px;

        border-radius: 50%;
        color: var(--color-text-in-primary);
      }
    }

    @media (max-width: 420px) {
      min-width: 200px;
      min-height: 150px;
    }
  }
`;
