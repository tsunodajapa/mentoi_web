import styled from 'styled-components';

export const Container = styled.div`
  main section:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: var(--color-primary);
    color: var(--color-text-in-primary);
    min-height: 200px;

    padding: 1rem 15rem;
    margin-top: -1rem;

    span {
    }

    h1 {
      font-size: 4rem;
    }
  }

  main section:last-child {
    position: relative;
    max-width: 600px;
    min-height: calc(100vh - 270px);
    margin: 0.8rem auto;
    line-height: 3rem;
    padding: 2rem;

    h2 {
      font-size: 3rem;
      margin: 1.5rem 0;
    }

    p {
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }

    p:last-of-type {
      text-align: end;
    }

    ol {
      padding-left: 3.5rem;
    }

    > svg {
      position: fixed;
      bottom: 22rem;
      left: 15rem;
      fill: var(--color-text-complement);
      transform: scale(25);
      z-index: -1;
      opacity: 0.1;
    }
  }

  @media (max-width: 762px) {
    main section:first-child {
      padding: 1rem 5rem;
    }
  }
`;
