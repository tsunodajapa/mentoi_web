import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  strong {
    font-weight: 700;
    font-size: 1.8rem;

    svg {
      color: var(--color-primary);
      margin-left: 0.4rem;
      padding-top: 0.4rem;
    }
  }

  span {
    color: var(--color-text-complement);
    font-size: 1.4rem;
  }
`;
