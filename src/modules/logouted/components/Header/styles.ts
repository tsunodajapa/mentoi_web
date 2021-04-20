import styled from 'styled-components';
import { Header } from '@/shared/components/Header/styles';

export const Container = styled(Header)`
  div {
    display: flex;
    justify-content: space-between;

    > div a {
      margin: 0 0.8rem;
      outline: none;
      text-decoration: none;
      border: 0.1rem solid;
      border-radius: 1.5rem;
      padding: 0.5rem 1.5rem;
    }

    a:nth-child(1) {
      color: var(--color-text-complement);
    }

    a:nth-child(2) {
      background: var(--color-primary);
      color: var(--color-text-in-primary);
    }

    @media (max-width: 425px) {
      > div a,
      button {
        border: none;
        padding: 0;
        background: none;
        color: var(--color-primary);
        font-weight: 700;
      }
    }
  }
`;
