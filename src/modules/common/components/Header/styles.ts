import styled from 'styled-components';
import { Header } from '@/shared/components/Header/styles';

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
          fill: var(--color-background);
        }

        span {
          font-weight: bold;
          font-size: 2rem;
          margin-left: 1.6rem;
        }
      }

      > button svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    label svg {
      color: var(--color-text);
      width: 4.6rem;
      height: 2.8rem;
      cursor: pointer;
    }

    li {
      position: relative;
    }

    li:first-child svg {
      width: 4.4rem;
      height: 2.4rem;
      margin-top: 0.2rem;
    }
  }
`;

export const SearchContent = styled.div`
  justify-content: flex-start !important;

  > button {
    width: 2.8rem;
    height: 2.8rem;

    margin-right: 1rem;
  }

  form {
    position: relative;

    > div > div {
      border: none;
    }

    > button {
      position: absolute;
      top: 0px;
      right: 4px;

      svg {
        color: var(--color-red);
        width: 3.5rem;
        height: 3.5rem;
      }
    }
  }
`;
