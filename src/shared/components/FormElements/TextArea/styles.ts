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
    overflow: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--color-text-light);
      margin: 1rem;
      border-radius: 1.6rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--color-primary-dark);
      border-radius: 1.6rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-primary);
    }
  }
`;

export const Error = styled(ErrorDefault)``;
