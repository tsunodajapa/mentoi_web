import styled, { css, keyframes } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
  isRemove: boolean;
}

const ToastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: var(--color-primary);
    color: var(--color-text-in-primary);
  `,
  error: css`
    background: #fddede;
    color: var(--color-red);
  `,
};

const translateXAnimationFrom = keyframes`
  0% {
    background-color: transparent;
    transform: translateX(120%);
  }
  95% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(0);
  }
`;

const translateXAnimationLeave = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    background-color: transparent;
    transform: translateX(120%);
  }
`;

const translateXAnimationMobileFrom = keyframes`
  from {
    background-color: transparent;
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0);
  }
`;

const translateXAnimationMobileLeave = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    background-color: transparent;
    transform: translateY(-120%);
  }
`;

export const Container = styled.div<ToastProps>`
  width: 36rem;

  position: relative;
  padding: 1.6rem 3rem 1.6rem 1.6rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);
  margin: 2rem 2.2rem 0;

  display: flex;

  & + div {
    margin-top: 0.8rem;
  }

  ${props => ToastTypeVariations[props.type || 'info']}

  ${({ isRemove }) =>
    css`
      animation: ${isRemove
          ? translateXAnimationLeave
          : translateXAnimationFrom}
        0.8s;
    `}

  > svg {
    margin: 0.4px 1.2rem 0 0;
  }

  div {
    flex: 1;

    strong {
      font-weight: bold;
    }

    p {
      margin-top: 0.4rem;
      font-size: 1rem.4rem;

      line-height: 2rem;
    }
  }

  button {
    position: absolute;
    right: 1.6rem;
    top: 1.9rem;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}

  @media(max-width: 420px) {
    width: 90%;
    margin: 1rem auto;

    ${({ isRemove }) =>
      css`
        animation: ${isRemove
            ? translateXAnimationMobileLeave
            : translateXAnimationMobileFrom}
          0.8s;
      `}
  }
`;
