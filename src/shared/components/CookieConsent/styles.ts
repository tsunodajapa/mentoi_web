import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
  isAnimationLeave: boolean;
}

const translateOpacityAnimationFrom = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
    display: block;
  }
`;

const translateOpacityAnimationLeave = keyframes`
  0% {
    display: block;
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    max-height: 0;
    max-width: 0;
    padding: 0;
  }
`;

export const Container = styled.div<ContainerProps>`
  z-index: 999;
  width: 350px;
  min-height: 20px;
  box-sizing: border-box;
  padding: 30px;
  background: #232323;
  overflow: hidden;
  position: fixed;
  bottom: 30px;
  right: 30px;

  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${translateOpacityAnimationFrom} forwards 0.8s;
        `
      : css`
          display: none;
        `}

  ${({ isAnimationLeave }) =>
    isAnimationLeave &&
    css`
      animation: ${translateOpacityAnimationLeave} forwards 3s;
    `}

  .cookieTitle a {
    color: #fff;
    font-size: 22px;
    line-height: 20px;
    display: block;
  }

  .cookieDesc p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 13px;
    line-height: 20px;
    display: block;
    margin-top: 10px;
  }

  .cookieDesc a {
    color: #fff;
    text-decoration: underline;
  }

  .cookieButton button {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    margin-top: 14px;
    background: #000;
    box-sizing: border-box;
    padding: 15px 24px;
    text-align: center;
    transition: background 0.3s;
    border: none;
  }

  .cookieButton button:hover {
    cursor: pointer;
    background: var(--color-primary);
  }

  @media (max-width: 980px) {
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
  }
`;
