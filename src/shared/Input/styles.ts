import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
  hasLabel: boolean;
}

export const Container = styled.div<ContainerProps>`
  label {
    color: var(--color-text);
  }

  label + div {
    margin-top: 0.3rem;
  }

  & + div {
    margin-top: 0.8rem;
  }

  > div {
    position: relative;

    background: #fff;
    width: 100%;

    display: flex;
    align-items: center;

    padding: 0.2rem;

    border-radius: 1.5rem;
    border: 0.2rem solid var(--color-text-complement);

    ${({ hasLabel }) =>
      hasLabel &&
      css`
        border-radius: 0.5rem;
        border: 0.1rem solid var(--color-text-complement);
      `}

    color: var(--color-text-complement);

    ${props =>
      props.isErrored &&
      css`
        border-color: var(--color-red);
      `}

    ${props =>
      props.isFocused &&
      css`
        color: var(--color-primary);

        border-color: var(--color-primary);
      `}

    ${props =>
      props.isField &&
      css`
        /* color: var(--color-text-complement); */
      `}

    input[type='date']::-webkit-calendar-picker-indicator {
      outline: none;
      cursor: pointer;
    }

    input {
      max-height: 3rem;

      flex: 1;
      background: transparent;
      border: 0;
      color: #000;
      padding: 0.5rem;

      &::placeholder {
        color: var(--color-text-complement);
      }

      & + input {
        margin-top: 0.8rem;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: 'color 9999s ease-out, background-color 9999s ease-out';
        transition-delay: 9999s;
      }
    }

    svg {
      /* margin: 0 1.6rem 0 0.6rem; */
      margin-left: 0.6rem;
      width: 2rem;
    }
  }
`;

export const Error = styled(Tooltip)`
  position: absolute;
  right: 5px;

  height: 2rem;
  background: var(--color-background);
  padding-left: 0.2rem;

  svg {
    margin: 0;
  }

  span {
    color: var(--color-text-in-primary);

    &::before {
      border-color: var(--color-red) transparent;
    }
  }
`;
