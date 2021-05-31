import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  /* > div {
    width: 100%;
  } */

  h2 {
    margin-bottom: 1rem;
  }

  form {
    margin-top: 1rem;

    > button {
      width: 100%;
      margin: 1rem 0;
    }

    > a {
      color: var(--color-primary);
    }
  }

  > div {
    display: flex;

    margin-top: 1.4rem;
    font-size: 1.3rem;

    a {
      color: var(--color-primary);
      margin-left: 0.5rem;
      text-decoration: none;
    }
  }
`;
