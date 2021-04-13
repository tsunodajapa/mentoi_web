import styled from 'styled-components';
import { Header } from '@/shared/Header/styles';

export const Container = styled(Header)`
  div:first-child > div {
    display: flex;
    justify-content: space-between;
  }

  form {
    width: 35rem;
  }

  > div:last-child {
    display: none;
  }

  @media (max-width: 425px) {
    > div:first-child {
      display: none !important;
    }

    > div:last-child {
      position: inherit;
      top: 0;
      z-index: 1001;

      background-color: var(--color-primary) !important;
      height: 5rem;

      display: flex !important;
      align-items: center;
      justify-content: space-between;

      padding: 0 1rem;
      color: var(--color-text-in-primary);

      > div {
        display: flex;
        align-items: center;

        svg {
          transform: scale(1.5);
        }

        span {
          font-weight: bold;
          font-size: 2rem;
          margin-left: 1.6rem;
        }
      }

      > svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;
