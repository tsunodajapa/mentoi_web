import styled from 'styled-components';

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
