import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--color-text);
    /* line-height: 5.5rem; */
    font-weight: bold;
    margin-top: -8rem;
  }

  @media (max-width: 700px) {
    svg {
      transform: scale(0.5);
    }

    h1 {
      font-size: 2.5rem;
      margin-top: -14rem;
      margin-bottom: 2rem;
    }
  }
`;
