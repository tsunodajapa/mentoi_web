import styled, { css } from 'styled-components';

interface HeaderProps {
  hasHeaderBackground: boolean;
}

const HeaderForm = css`
  background: #fff;
  width: 30%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 3.5rem;
  padding: 0.2rem;
  border: 0.2rem solid var(--color-primary);

  color: var(--color-text-complement);

  > div div {
    border: none;
  }

  > input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    margin-left: 0.5rem;

    &::placeholder {
      color: var(--color-text-light);
    }
  }

  > button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
  }

  > button:hover svg {
    background-color: var(--color-primary-dark);
  }

  > button svg {
    margin-right: 0.2rem;
    width: 3.2rem;
    height: 3.2rem;
    padding: 0.5rem;
    font-weight: 700;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #fff;
  }
`;

export const Container = styled.header<HeaderProps>`
  position: sticky;
  top: 0;
  z-index: 1003;

  padding: 0 9rem;
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;

  background-image: linear-gradient(90deg, white 43%, #00000000 33%);

  > svg {
    transform: scale(2);
    margin-left: 5.8rem;
    margin-bottom: 4rem;
  }

  form {
    display: none;
  }

  ${({ hasHeaderBackground }) =>
    hasHeaderBackground &&
    css`
      align-items: center;
      background: var(--color-background);
      padding: 0.5rem 9rem;
      box-shadow: 0px -0.1rem 0.3rem 0.2rem rgba(0, 0, 0, 0.15);

      > svg {
        transform: scale(1.2);
        margin: 0rem;
        width: 30%;
      }

      form {
        display: block;
        ${HeaderForm}
      }

      > div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: auto;
      }
    `}

  > div button {
    font-size: 1.8rem;
    margin: 0 0.8rem;
    padding: 0.4rem 1.5rem;
    border-radius: 2.5rem;
    border-width: 0.1rem;
  }

  @media (max-width: 550px) {
    padding: 4px;
    align-items: center;

    background: var(--color-background);
    box-shadow: 0px -0.1rem 0.3rem 0.2rem rgba(0, 0, 0, 0.15);

    svg {
      margin: 0.5rem;
      transform: scale(1);
    }

    form {
      display: none;
    }

    > div {
      margin-right: 0.5rem;
    }

    > div a,
    > div button {
      border: none;
      padding: 0;
      margin: 0 !important;
      background: none;
      font-weight: 700;
      font-size: 1.6rem;
    }

    > div button {
      color: var(--color-text);
      margin-right: 1rem !important;
    }

    > div button:hover {
      border: none;
      background: none;
      color: var(--color-text);
    }
  }
`;
