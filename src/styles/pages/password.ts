import styled from 'styled-components';
import { Main as MainDefault } from '@/shared/components/Main/styles';

export const Main = styled(MainDefault)`
  max-width: 450px !important;
  padding: 1.2rem;

  section:first-child {
    text-align: center;

    h1 {
      color: var(--color-primary);
      margin: 0.6rem 0;
      font-size: 6rem;
      font-weight: bold;
    }

    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1.4rem;
    }
  }

  form {
    z-index: 1000;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 15rem;
    margin: 1rem auto;
  }

  > svg {
    position: fixed;
    transform: scale(25);
    right: 8rem;
    bottom: 9.6rem;
    color: var(--color-primary-light);
    z-index: -1;
  }
`;
