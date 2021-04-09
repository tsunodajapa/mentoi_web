import styled from 'styled-components';

interface StepProps {
  step: number;
}

export const Container = styled.main<StepProps>`
  max-width: 1080px;
  margin: 0 auto;
  overflow-x: hidden;

  > div {
    display: flex;
    justify-content: space-evenly;

    > div {
      display: none;
    }

    > div:first-child {
      width: 75%;
      display: initial;
    }

    > div:last-child {
      width: 20%;
      display: initial;
    }
  }
  @media (max-width: 475px) {
    > div {
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
        display: initial;
        max-height: calc(100vh);
        overflow: auto;
        padding-bottom: 12rem;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1rem;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      max-width: 135px;
      max-height: 135px;
      width: 100%;
    }

    img {
      border-radius: 50%;
      max-width: 70% !important;
      min-width: 70% !important;
      max-height: 70% !important;
      min-height: 70% !important;
    }
  }

  strong {
    font-weight: bold;
    font-size: 2rem;
  }

  span {
    color: var(--color-text-complement);
    font-size: 1.4rem;
  }
`;

export const Row = styled.div`
  border-top: 1px solid var(--color-text-light);
  margin: 0.8rem;
  padding-top: 0.4rem;

  min-height: 4rem;

  span {
    font-weight: bold;
    font-size: 1.4rem;
  }
`;
