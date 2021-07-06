import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  bottom: 0;
  background: var(--color-background);

  display: flex;
  justify-content: space-between;
  margin: 0 4rem;
  padding: 2rem 0;

  > form {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      display: flex;
      width: 100%;

      > div:first-child {
        position: relative;
        width: 3.5rem;
        height: 3.5rem;
        min-width: 3.5rem;
        min-height: 3.5rem;
        margin-right: 0.5rem;
      }

      > div:nth-of-type(2) {
        width: 100%;

        div {
          border-radius: 0.2rem;
        }
      }
    }

    button {
      margin-top: 1.4rem;
      width: 30%;
    }
  }

  > button {
    margin: auto;
  }

  button svg {
    color: var(--color-text-complement);
    transform: scale(1.2);
  }

  @media (max-width: 425px) {
    background: #fff;
    width: 100%;
    margin: 0;
    padding: 1.5rem;
    border-top: 4px solid #dfefd9;
    border-radius: 2.2rem;

    > form > div > div:nth-of-type(2) {
      width: 85%;
    }

    form button {
      width: 45%;
    }
  }
`;
