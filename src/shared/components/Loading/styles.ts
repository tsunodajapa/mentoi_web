import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg:first-child {
    transform: scale(2);
  }

  > div {
    width: 25% !important;
    height: auto !important;
  }

  @media (max-width: 425px) {
    > div {
      width: 65% !important;
    }
  }
`;
