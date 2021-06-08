import styled from 'styled-components';
import { Main as MainDefault } from '@/shared/components/Main/styles';

export const Main = styled(MainDefault)`
  > svg {
    position: fixed;
    transform: scaleX(-25) scaleY(25);
    left: 8rem;
    bottom: 9.6rem;
    color: var(--color-primary-light);
    z-index: -1;
  }
`;
export const InputGroup = styled.div`
  > div {
    display: flex;
    width: 100%;

    & + div {
      margin-top: 0.5rem;
    }

    > div:first-child {
      width: 15%;
      margin-right: 0.8rem;
    }

    > div:nth-child(2) {
      flex: 1;
      margin-top: 0;
    }
  }

  > button {
    margin: 1.5rem 0;
  }
  margin-bottom: 0.5rem;
`;

export const Section = styled.section`
  display: flex;
  min-height: 100vh;
  margin-top: 1.5rem;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 35%;
    color: var(--color-primary);
    font-weight: bold;

    ul {
      font-size: 2.5rem;
      list-style: none;
      width: 100%;
      margin-bottom: 0.6rem;

      li {
        background: var(--color-primary-light);
        padding: 1rem 2rem;
        margin: 0.8rem;
        border-radius: 2.8rem;
      }
    }
  }

  main {
    width: 100%;
    margin-left: 1.5rem;
    padding: 0 5rem;

    form {
      fieldset {
        padding: 1rem 1.8rem;
        margin-bottom: 1.8rem;
        border-radius: 2rem;
        border-color: var(--color-primary-light);
        border-style: dashed;

        legend {
          text-align: center;
          font-size: 2.4rem;
          color: var(--color-primary);
        }
      }

      > button {
        display: flex;
        margin-left: auto;
        margin-top: 0.8rem;
        padding: 0.2rem 2.4rem;
      }
    }
  }
`;
