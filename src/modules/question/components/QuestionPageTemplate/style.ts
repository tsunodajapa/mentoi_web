import styled from 'styled-components';
import { Main as MainDefault } from '@/shared/components/Main/styles';

export const Main = styled(MainDefault)`
  display: flex;
  flex-direction: column;
  min-height: 90vh;

  > div {
    display: flex;
    justify-content: space-evenly;

    > section {
      width: 75%;
    }
    > div {
      display: flex;
      justify-content: center;
      width: 30%;

      > section:last-child {
        position: fixed;
        width: min(22rem, 20%);
      }
    }
  }

  > span {
    display: none;
  }

  @media (max-width: 425px) {
    margin-top: 1px;

    > div {
      > section {
        width: 100%;
        margin: 1rem;
      }
      > div {
        display: none;
      }
    }

    > span {
      display: flex;
      align-items: center;
      flex: none;
      margin: auto;

      font-size: 2.4rem;
      color: #64b447;
    }
  }
`;

export const AnswersContainer = styled.div`
  padding: 3rem;

  > div {
    border-top: 0.1rem solid var(--color-primary-light);

    > div:last-child > button {
      padding: 0.4rem 1rem;
      font-size: 1.4rem;
      border-radius: 1rem;
    }
  }

  @media (max-width: 425px) {
    height: calc(100vh - 30rem);
    overflow: auto;
  }
`;

export const AnswersFooter = styled.div`
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

export const EvaluateContainer = styled.div`
  display: flex;

  svg {
    transform: scale(1.2);
    margin-right: 0.6rem;
  }

  span {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    display: grid !important;
    grid-template-areas:
      'button-one button-two button-three'
      'texto texto texto';

    > button {
      width: fit-content;
      margin: auto;
    }

    > button:nth-child(1) {
      grid-area: button-one;
    }

    > button:nth-child(2) {
      grid-area: button-two;
    }

    > button:nth-child(3) {
      grid-area: button-three;
    }

    svg {
      margin: 0;
    }

    > span {
      grid-area: texto;
      margin-top: 0.8rem;
      font-size: 1.3rem;
    }
  }
`;
