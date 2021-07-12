import styled, { css } from 'styled-components';

export interface ModalStyles {
  background?: string;
  left?: number;
  top?: number;
  width?: number | string;
  position?: string;
}

interface ContainerProps {
  visible?: boolean;
  styles: ModalStyles;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  ${({ styles }) =>
    styles &&
    css`
      position: ${styles.position} !important;
      width: ${styles.position && '30rem'} !important;
      height: ${styles.position && 'auto'} !important;
      background: ${styles.background} !important;
      top: ${styles.top ? `${styles.top}px` : '50%'} !important;
      left: ${styles.left ? `${styles.left}px` : '50%'} !important;
      transform: ${!styles.left && css`translate(-50%, -50%);`};
    `}

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
    flex-direction: column;
    background-color: var(--color-background);
    min-width: 30rem;

    ${({ styles }) =>
      styles &&
      css`
        width: ${styles.width};
        max-width: ${styles.width};
      `}

    border-radius: 1.5rem;
    padding: 1.5rem;

    > button {
      position: absolute;
      top: -10px;
      right: -10px;

      > svg {
        background-color: var(--color-primary);
        width: 2.5rem;
        height: 2.5rem;

        border-radius: 50%;
        color: var(--color-text-in-primary);
      }
    }

    @media (max-width: 420px) {
      min-width: 20rem;
      min-height: 15rem;

      ${({ styles }) =>
        styles &&
        css`
          width: ${styles.width};
        `}
    }
  }
`;
