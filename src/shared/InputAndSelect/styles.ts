import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled(Form)`
  background: #fff;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 3.5rem;
  padding: 0.2rem;
  border: 0.2rem solid var(--color-primary);

  color: var(--color-text-complement);

  margin: 1.5rem 0;

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
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.5rem;
    font-weight: 700;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #fff;
  }

  select {
    display: none;
    background: none;
    border: 0.2rem solid var(--color-text-complement);
    width: 100%;
    border-radius: 1.5rem;
    height: 3.5rem;
  }

  div:nth-of-type(2) {
    display: none;
  }
`;

export const Select = styled.div`
  position: relative;
  width: 30%;
  text-align: center;

  border-right: 0.15rem solid var(--color-text-complement);
  margin: 0.5rem;

  label:after {
    content: '\u203a';
    font-size: 2.5rem;
    position: absolute;
    right: 1rem;
    top: -0.7rem;
    transition: ease-in 0.2s;
  }

  input {
    display: none;
  }

  input:checked ~ div {
    display: flex;
  }

  input:checked + label:after {
    transform: rotate(90deg);
    top: -0.4rem;
  }

  div {
    display: none;
    position: absolute;
    background-color: var(--color-background);
    width: 100%;
    flex-direction: column;

    /* border: 0.2rem solid var(--color-primary); */
    border-radius: 1.5rem;
    padding: 0.5rem;
    left: 0;
    top: 3.2rem;
    z-index: 1001;

    box-shadow: 0 1.3rem 8.1rem -0.7rem rgba(0, 0, 0, 0.15);
  }

  button {
    background: none;
    border: none;
    padding: 1rem;

    position: relative;
    cursor: pointer;
  }

  button + button {
    /* border-top: 1px solid var(--color-primary); */
  }

  button:after {
    content: '';
    position: absolute;
    display: none;
    height: 2.4rem;
    width: 0.2rem;
    background-color: var(--color-primary);
    left: 0;
    top: 1rem;
    z-index: 1002;
  }

  button:hover::after {
    display: block;
  }
`;
