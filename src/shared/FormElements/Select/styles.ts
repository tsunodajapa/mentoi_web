import styled from 'styled-components';
import { ContainerDefault } from '../styles';

export const Container = styled(ContainerDefault)`
  select {
    display: none;
    background: none;
    border: 0.1rem solid var(--color-text-complement);
    width: 100%;
    border-radius: 1.5rem;
    height: 3.5rem;
  }
`;

export const SelectDesktop = styled.div`
  :hover {
    border-color: var(--color-primary);
  }

  label {
    width: 100%;
    padding: 0.5rem;
    cursor: pointer;
  }

  label:after {
    content: '\u203a';
    font-size: 2.5rem;
    position: absolute;
    right: 1rem;
    top: 0rem;
    color: var(--color-text-complement);
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
    top: 0.2rem;
  }

  div {
    display: none;
    position: absolute;
    background-color: var(--color-background);
    width: 100%;
    flex-direction: column;

    border-radius: 0.6rem;
    padding: 0.5rem;
    left: 0;
    top: 3.6rem;
    z-index: 1001;

    box-shadow: 0 0px 2px 0px rgb(0 0 0 / 44%);
  }

  button {
    background: none;
    border: none;
    padding: 1rem;
    text-align: start;

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
    height: 2.8rem;
    width: 0.2rem;
    background-color: var(--color-primary);
    left: 0;
    top: 0.35rem;
    z-index: 1002;
  }

  button:hover::after {
    display: block;
  }
`;
