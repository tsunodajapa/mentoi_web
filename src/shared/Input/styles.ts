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
  border: 2px solid #a3a3a2;

  color: #a3a3a2;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;

      border-color: #ff9000;
    `}

  ${props =>
    props.isField &&
    css`
      /* color: #ff9000; */
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #a3a3a2;
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
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
