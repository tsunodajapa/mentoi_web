import styled from 'styled-components';

export const ContainerMobile = styled.footer`
  @media (min-width: 425px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0;

  div {
    display: flex;
    border-top: 0.3rem solid var(--color-text-complement);
    width: 100%;
    justify-content: space-evenly;
    background-color: var(--color-background);
    z-index: 1001;

    button {
      padding: 0 1.1rem;
      background: #ffffff;
      z-index: 1001;
    }
  }

  div:nth-of-type(1) {
    margin-right: 1.2rem;
  }

  div:nth-of-type(2) {
    margin-left: 1.2rem;
  }

  button {
    svg {
      width: 3.5rem;
      height: 3.5rem;
      /* color: var(--color-text-complement); */
    }
  }

  > button {
    background-color: var(--color-background);
    width: 6.7rem;
    max-width: 6.7rem;
    min-width: 6.7rem;
    display: flex;
    justify-content: center;

    position: relative;
    border: 0.3rem solid var(--color-text-complement);
    border-top: 0;
    margin-top: 1.3rem;
    margin-bottom: 0.5rem;
    border-radius: 0 0 5rem 5rem;
    padding: 0 0.1rem;
    box-shadow: 0 138px 14px 160px #fff;

    svg {
      width: 4.8rem;
      height: 4.8rem;
      margin-bottom: 2rem;
      position: absolute;
    }

    &:after {
      content: '';
      padding: 0.5rem;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 0 100% 0 0;
      border-right: 0.3rem solid var(--color-text-complement);
      border-top: 0.3rem solid var(--color-text-complement);
      top: -2.5rem;
      left: -4.6rem;
      position: relative;
      background: #ffffff;
    }
    &:before {
      content: '';
      padding: 0.5rem;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 100% 0 0 0;
      border-left: 0.3rem solid var(--color-text-complement);
      border-top: 0.3rem solid var(--color-text-complement);
      top: -2.5rem;
      left: 4.6rem;
      position: relative;
      background: #ffffff;
    }
  }
`;
