import styled from 'styled-components';

import { ContainerDefault, ErrorDefault } from '../styles';

export const Container = styled(ContainerDefault)`
  position: relative;

  > div:nth-of-type(1) {
    flex-direction: column;

    > div {
      > svg {
        position: absolute;
        bottom: 10px;
        right: 10px;
        transform: scale(1.8);
        cursor: pointer;
      }
      > svg:hover {
        color: var(--color-primary);
      }
    }
  }

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    overflow: hidden;
  }
`;

export const Error = styled(ErrorDefault)``;
