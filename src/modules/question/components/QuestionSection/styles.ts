import styled from 'styled-components';

interface StepProps {
  step: number;
}

export const Container = styled.div<StepProps>`
  display: flex;
  justify-content: space-evenly;

  > div {
    display: none;
  }

  > div:first-child {
    width: 75%;
    display: initial;

    > section:first-child {
      margin-bottom: 2rem;
    }
  }

  > div:nth-child(4) {
    margin: auto;
    text-align: center;
    font-size: 3rem;
    color: var(--color-primary);
    font-weight: 700;
  }

  > div:last-child {
    width: 20%;
    display: initial;
    padding-top: 2rem;

    @media (min-width: 475px) {
      > aside {
        position: fixed;
        width: min(25rem, 20%);

        > div {
          margin-bottom: 15px;
        }
      }
    }
  }

  @media (max-width: 475px) {
    --selected-item: ${({ step }) => step};
    --total-items: 5;

    margin: 1rem 0;
    padding: 0;
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    left: calc(var(--selected-item) * -100%);
    width: calc(var(--total-items) * 100%) !important;
    transition: left 0.4s cubic-bezier(0.4, 0, 1, 1);

    > div {
      width: 100% !important;
      display: block;
      max-height: calc(100vh - 8rem);
      overflow: auto;
      padding-bottom: 2rem;

      > aside {
        > div:last-child {
          display: none;
        }
      }
    }
  }
`;
