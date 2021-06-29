import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.2rem;
  margin-top: 0.2rem;

  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
  }

  div:first-of-type {
    padding: 0.2rem;
    margin: 0.8rem;
    border-top: 0.1rem solid var(--color-text-light);
  }

  div:last-of-type {
    display: flex;
    align-items: center;

    svg {
      width: 30%;
      height: 2rem;
      color: var(--color-primary);
    }

    p {
      text-align: start;
      font-size: 1rem;
      font-weight: normal;
      color: var(--color-text-complement);
    }

    margin-bottom: 0.5rem;
  }

  button {
    margin: 0.5rem;
    padding: 0.2rem 0.8rem;
  }
`;
