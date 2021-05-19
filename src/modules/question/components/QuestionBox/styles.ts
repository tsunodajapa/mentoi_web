import styled, { css } from 'styled-components';

interface ContainerProps {
  titleColor: [string, string];
  isQuestionPage: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-background);

  border-radius: 1.2rem;
  box-shadow: -3px 1rem 3rem 0rem rgb(0 0 0 / 14%);

  ${({ isQuestionPage }) =>
    isQuestionPage
      ? css`
          margin: -0.4rem;
        `
      : css`
          margin: 0.8rem 0.8rem 2.8rem 0.8rem;
        `}

  > div:nth-child(1) {
    ${({ titleColor }) =>
      css`
        background: linear-gradient(
          to right,
          ${titleColor ? titleColor[0] : 'var(--color-primary)'},
          ${titleColor ? titleColor[1] : 'var(--color-primary)'} 112%
        );
      `}

    margin: 0;
    padding: 0.6rem;
    border-radius: 1.2rem 1.2rem 0 0;

    color: var(--color-text-in-primary);
    font-weight: 700;
    font-size: 2rem;
  }

  @media (min-width: 475px) {
    > div:nth-of-type(2) {
      max-height: calc(100vh - 16rem);

      overflow-y: scroll;
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: var(--color-text-light);
        margin: 1rem;
        border-radius: 1.6rem;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--color-primary-dark);
        border-radius: 1.6rem;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary);
      }

      > span {
        width: 100%;
        display: flex;
        justify-content: center;

        margin: 2rem 0;
        color: #64b447;
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 475px) {
    margin-bottom: 1.8rem;

    ${({ isQuestionPage }) =>
      isQuestionPage &&
      css`
        padding-bottom: 6rem;
      `}

    > div:nth-child(1) {
      display: none;
    }

    > div:nth-child(2) > span {
      display: none;
    }
  }
`;

export const Content = styled.div`
  padding: 1.5rem 1.5rem 0 1.5rem;

  > div:last-child {
    display: flex;
    justify-content: space-between;

    margin-top: 1.6rem;
    border-bottom: 0.1rem solid var(--color-primary-light);
    padding: 1rem 0;

    div {
      display: flex;
      align-items: center;
      color: var(--color-text-complement);

      svg {
        width: 2rem;
        height: 2rem;
      }

      span {
        margin-left: 0.3rem;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.6rem;

  > div {
    display: flex;
    align-items: center;

    > div:nth-child(1) {
      position: relative;
      width: 4.5rem;
      height: 4.5rem;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      margin-left: 1.5rem;

      span:nth-child(1) {
        font-weight: 700;
        font-size: 1.8rem;
      }

      span:nth-child(2) {
        color: var(--color-text-complement);
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: 425px) {
    align-items: flex-start;
    flex-direction: column;
  }

  img {
    width: 4.5rem;
    height: 4.5rem;
    background-color: #af579d;

    border-radius: 50%;
    border: none;
  }

  > span {
    align-self: flex-start;

    margin-top: 0.4rem;

    color: var(--color-text-complement);
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

  button svg {
    color: var(--color-text-complement);
    transform: scale(1.2);
  }

  @media (max-width: 425px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 90%;
    margin: 0 2.1rem;
    padding: 1.5rem;

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
