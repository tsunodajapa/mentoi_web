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
    margin-top: 1rem;

    > button {
      width: 100%;
      margin: 1rem 0;
    }
  }
`;
