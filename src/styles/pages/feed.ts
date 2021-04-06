import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: space-evenly;

    > div:nth-child(1) {
      width: 75%;
    }

    > div:nth-child(2) {
      width: 20%;
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
