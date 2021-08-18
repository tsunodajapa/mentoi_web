import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  border: 0.2rem solid var(--color-primary-light);
  border-radius: 1.5rem;
  margin: 0 0.5rem;

  @media (max-width: 475px) {
    background: none;

    margin: 0 2.5rem;
    border: 0;
  }
`;
