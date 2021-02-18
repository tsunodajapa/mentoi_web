import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  form {
    width: 100%;

    > button {
      width: 100%;
      margin: 1rem 0;
    }
  }

  div {
    display: flex;

    font-size: 1.2rem;

    a {
      color: var(--color-primary);
      margin-left: 0.5rem;
      text-decoration: none;
    }
  }
`;
