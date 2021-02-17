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
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
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

export const Container = styled.div<ToastProps>`
  width: 360px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => ToastTypeVariations[props.type || 'info']}

  ${({ isRemove }) =>
    css`
      animation: ${isRemove
          ? translateXAnimationLeave
          : translateXAnimationFrom}
        1s;
    `}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
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
`;
