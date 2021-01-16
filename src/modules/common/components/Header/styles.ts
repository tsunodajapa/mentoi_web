import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;

  border-bottom: 1.5px solid #a2a2a1;

  padding: 8px 32px;
  margin: 0 auto 10px auto;

  form {
    width: 350px;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;
