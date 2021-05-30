import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface ContainerProps {
  styles: FlattenSimpleInterpolation;
  size: number;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;

  label {
    cursor: pointer;

    svg {
      ${({ size }) =>
        size &&
        css`
          transform: scale(${size});
        `}
    }
  }

  input ~ div,
  input {
    display: none !important;
  }

  input ~ div {
    flex-direction: column;
    position: absolute;
    right: 0.8rem;
    top: 3.8rem;
    width: 14rem;
    background: var(--color-background);
    box-shadow: 0 0px 2px 0px rgb(100 180 71);

    ${({ styles }) => styles}

    a,
    button {
      z-index: 1000;
      background: none;
      outline: none;
      border: none;
      text-align: center;
      text-decoration: none;

      color: var(--color-text);
      margin: 0.2rem;
      padding: 0.2rem;

      &:hover {
        background: var(--color-primary-light);
      }
    }

    &::before {
      z-index: 999;
      position: absolute;
      content: '';
      width: 1.4rem;
      height: 1.4rem;
      background: #fff;
      top: -0.4rem;
      right: 0.8rem;
      transform: rotate(45deg);
      box-shadow: -3px -3px 0px -2px rgb(100 180 71 / 41%);
    }
  }

  input:checked ~ div {
    display: flex !important;
  }
`;
