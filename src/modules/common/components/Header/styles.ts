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

    li > input ~ div,
    li > input {
      display: none;
    }

    li > input ~ div {
      flex-direction: column;
      position: absolute;
      right: 0.8rem;
      top: 3.8rem;
      width: 20rem;
      background: var(--color-background);
      box-shadow: 0 0px 2px 0px rgb(100 180 71);

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

    li > input:checked ~ div {
      display: flex;
    }
  }
`;
