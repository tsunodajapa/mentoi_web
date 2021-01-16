import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-evenly;

    > div:nth-child(1) {
      width: 75%;
    }

    > div:nth-child(2) {
      width: 20%;
    }
  }
`;
