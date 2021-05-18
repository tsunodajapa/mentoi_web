import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    text-align: center;
    color: var(--color-primary);
    font-weight: bold;
  }

  p {
    margin: 1rem 0;
    text-align: center;
  }

  p:nth-of-type(1) {
    font-weight: bold;
  }

  a {
    display: flex;
    width: fit-content;
    margin: 2.5rem auto auto auto;

    font-size: 1.8rem;
    font-weight: bold;
  }
  > div:last-child {
    position: relative;
    min-height: 8.8rem;

    svg {
      position: absolute;
      transform: scale(0.8);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
    }

    @media (max-width: 410px) {
      svg {
        transform: translate(-50%, -40%) scale(0.75);
      }
    }

    @media (max-width: 410px) {
      > svg {
        transform: translate(-50%, -40%) scale(0.6);
      }
    }
  }
`;
