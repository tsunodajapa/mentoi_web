import styled from 'styled-components';
import { Header } from '@/shared/components/Header/styles';

export const Container = styled(Header)`
  div {
    display: flex;
    justify-content: space-between;

    @media (max-width: 425px) {
      > div a,
      button {
        border: none;
        padding: 0;
        background: none;
        font-weight: 700;
      }

      > div button {
        color: var(--color-text);
      }

      > div button:hover {
        border: none;
        background: none;
        color: var(--color-text);
      }
    }
  }
`;
