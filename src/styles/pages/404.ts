import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    width: 30%;
  }

  img:nth-child(1) {
    top: 0;
    left: 0;
  }
  img:nth-child(2) {
    bottom: 0;
    right: 0;
  }

  h1 {
    color: var(--color-text);
    font-weight: bold;
    margin-top: -8rem;
  }

  a {
    margin-top: 1.2rem;
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
