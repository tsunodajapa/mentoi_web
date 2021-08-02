import styled, { css } from 'styled-components';
import { Main as MainDefault } from '@/shared/components/Main/styles';

interface AnswerContainerProps {
  useCanAnswerQuestion: boolean;
}

export const Main = styled(MainDefault)`
  display: flex;
  min-height: 90vh;

  display: flex;
  justify-content: space-evenly;

  > section {
    width: 75%;
  }
  > div {
    display: flex;
    justify-content: center;
    width: 30%;
    margin-top: 15px;

    > section:last-child {
      position: fixed;
      width: min(22rem, 20%);
    }
  }

  > span {
    display: none;
  }

  @media (max-width: 425px) {
    margin-top: 1px;

    > section {
      width: 100%;
      margin: 1rem;
    }
    > div {
      display: none;
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

export const AnswersContainer = styled.div<AnswerContainerProps>`
  padding: 0 3rem;

  > div {
    border-top: 0.1rem solid var(--color-primary-light);

    > div:last-child > button {
      font-size: 1.4rem;
      border-radius: 1rem;
    }
  }

  @media (max-width: 425px) {
    height: calc(100vh - 25rem);

    ${({ useCanAnswerQuestion }) =>
      useCanAnswerQuestion &&
      css`
        height: calc(100vh - 30rem);
      `}

    overflow: auto;
  }
`;

export const BestAnswerTemplate = styled.div`
  background: var(--color-primary-light);
  border-radius: 1.5rem;
  margin: 0.5rem;

  > h3 {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    border-bottom: 1px solid var(--color-primary);
    color: var(--color-primary);
    padding: 0.4rem;
    width: 90%;
    margin: 0.7rem auto;
  }
`;
