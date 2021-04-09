import styled from 'styled-components';
import { Header } from '@/shared/Header/styles';

export const Container = styled(Header)`
  @media (max-width: 998px) {
    display: none;
  }

  form {
    width: 35rem;
  }

  div > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ContainerMobile = styled.header`
  @media (min-width: 425px) {
    display: none;
  }

  position: inherit;
  margin-top: 0.8rem;
  top: 0;
  z-index: 1001;

  background: var(--color-primary);
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  color: var(--color-text-in-primary);

  div {
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
`;
