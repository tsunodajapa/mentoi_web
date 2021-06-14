import styled from 'styled-components';

interface StepProps {
  step: number;
}

export const Container = styled.main`
  min-height: calc(100vh - 6rem);
  margin: 0 auto;

  color: var(--color-text-complement);

  display: flex;

  h1 {
    text-align: center;
    color: var(--color-primary);
  }

  @media (max-width: 860px) {
    justify-content: center;
  }
`;

export const Left = styled.div<StepProps>`
  position: relative;
  z-index: 1000;

  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(1) {
    position: absolute;
    z-index: 999;

    img {
      object-fit: cover;
      transform: scaleX(-1);
    }
  }

  > div:nth-child(2) {
    display: flex;
    width: 100%;

    > button {
      background: none;
      outline: none;
      border: none;
      height: fit-content;

      display: flex;

      color: var(--color-text-in-primary);
      margin-top: 2rem;
      margin-left: 2rem;
      font-size: 2.2rem;

      svg {
        align-items: flex-start;
        margin-right: 0.6rem;
        color: var(--color-text-in-primary);
        width: 2.6rem;
        height: 2.6rem;
      }
    }

    > svg {
      width: 2rem;
      height: 2rem;
    }
  }

  > :nth-child(n + 1) {
    z-index: 1000;
  }

  ul {
    position: relative;
    list-style: none;
    margin-top: 2rem;
    text-align: left;
    width: 100%;
    margin-right: 6rem;

    color: var(--color-text-in-primary);

    li {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 4rem;
      font-size: 2.2rem;
    }

    li:nth-child(${({ step }) => step}) {
      font-weight: bold;

      div {
        background-color: var(--color-background);
        box-shadow: 0px 0px 1px 3px rgb(255 255 255 / 50%);
      }
    }

    div {
      width: 3.2rem;
      height: 3.2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 0.2rem solid var(--color-background);
      border-radius: 50%;
      margin-left: 1.4rem;

      svg {
        width: 0.7em;
        height: 0.7em;
      }
    }

    &:after {
      content: '';
      width: 0.3rem;
      height: 4.4rem;
      position: absolute;
      background: var(--color-background);
      top: 3rem;
      right: 1.5rem;
    }
  }

  > svg {
    margin-bottom: 2rem;
    transform: scale(1.4);
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Right = styled.div<StepProps>`
  background-color: var(--color-backgrounf);
  width: 50%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    display: none;
  }

  form {
    width: 41.5rem;
    max-width: 80%;
    color: var(--color-text);
    overflow: hidden;
    margin: 2.5rem auto;

    > div {
      --selected-item: ${({ step }) => step - 1};
      --total-items: 2;

      margin: 1rem 0;
      padding: 0;
      position: relative;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      left: calc(var(--selected-item) * -100%);
      width: calc(var(--total-items) * 100%);
      transition: left 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    label + div {
      margin-bottom: 1rem;
    }

    button {
      border-radius: 1.8rem;
      padding: 0.5rem 1.5rem;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1;

    color: var(--color-text);
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;

    b {
      margin-left: 0.4rem;
    }
  }

  h1 {
    text-align: center;
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  @media (max-width: 860px) {
    width: 95vw;

    form {
      width: auto;
      max-width: 100%;
    }

    > svg {
      display: initial;
      margin-top: 0.5rem;
    }
  }
`;

export const Footer = styled.footer`
  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      min-width: 12rem;
    }
  }

  > button {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const Border = styled.div`
  border: 0.08rem solid var(--color-primary-light);
  margin: 2rem auto !important;
  padding: 0 7.4rem;
  width: 94%;
`;

export const Genero = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.4rem;
  height: 3.8rem;

  div {
    flex: 1;
    margin: 0 0.5rem;

    > label {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;
      margin-top: 0.4rem;
      border: 1px solid var(--color-text-complement);
      border-radius: 0.5rem;

      cursor: pointer;
      color: var(--color-primary);
      text-align: center;

      > svg {
        margin-right: 0.4rem;
      }

      &:hover {
        border-color: var(--color-primary);
        border-width: 0.2rem;
      }
    }
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: var(--color-primary);
    color: var(--color-text-in-primary);
  }

  @media (max-width: 998px) {
    div > label {
      width: 11rem;
    }
  }
`;
