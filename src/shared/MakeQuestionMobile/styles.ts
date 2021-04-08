import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 1.5rem;

  form {
    display: flex;
    flex-direction: column;

    > button {
      width: 15rem;
      align-self: center;
      margin-top: 2rem;
      font-weight: bold;
      font-size: 1.8rem;
      padding: 0.6rem 1.5rem;
      border-radius: 2rem;
    }
  }
`;
