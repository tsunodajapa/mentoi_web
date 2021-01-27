import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 15px;
  padding: 2px;
  border: 2px solid var(--color-text-complement);

  color: var(--color-text-complement);

  & + div {
    margin-top: 8px;
  }

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

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: var(--color-text-complement);
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
    width: 20px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--color-red);
    color: var(--color-text-in-primary);

    &::before {
      border-color: var(--color-red) transparent;
    }
  }
`;
