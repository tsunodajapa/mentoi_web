import styled from 'styled-components';

export const Container = styled.div`
  h1,
  h2 {
    color: var(--color-primary);
  }

  h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  > form {
    > button {
      width: 10rem;
      display: block;
      margin: 1.4rem auto;
    }
  }

  > button {
    margin-bottom: 1.8rem;
  }
`;

export const Line = styled.div`
  margin: 2rem 0;
  width: 100%;
  border-bottom: 0.2rem solid var(--color-primary);
`;

export const SecuritySection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 0 !important;
  padding: 0 !important;

  button {
    width: fit-content;
    margin-top: 0.5rem;
  }

  button:last-child {
    margin-top: 2rem;
  }
`;
