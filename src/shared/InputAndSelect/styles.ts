import { Form } from '@unform/web';
import styled from 'styled-components';

export const Container = styled(Form)`
  background: #fff;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 35px;
  padding: 2px;
  border: 2px solid var(--color-primary);

  color: var(--color-text-complement);

  margin: 15px 0;

  > input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    margin-left: 5px;

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
    margin-right: 2px;
    width: 35px;
    height: 35px;
    padding: 5px;
    font-weight: 700;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #fff;
  }

  select {
    display: none;
    background: none;
    border: 2px solid var(--color-text-complement);
    width: 100%;
    border-radius: 15px;
    height: 35px;
  }

  div:nth-of-type(2) {
    display: none;
  }

`;

export const Select = styled.div`
  position: relative;
  width: 30%;
  text-align: center;

  border-right: 1.5px solid var(--color-text-complement);
  margin: 5px;

  label:after {
    content: '\u203a';
    font-size: 25px;
    position: absolute;
    right: 10px;
    top: -7px;
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
    top: -4px;
  }

  div {
    display: none;
    position: absolute;
    background-color: var(--color-background);
    width: 100%;
    flex-direction: column;

    /* border: 2px solid var(--color-primary); */
    border-radius: 15px;
    padding: 5px;
    left: 0;
    top: 32px;
    z-index: 1001;

    box-shadow: 0px 13px 81px -7px rgba(0, 0, 0, 0.15);
  }

  button {
    background: none;
    border: none;
    padding: 10px;

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
    height: 24px;
    width: 2px;
    background-color: var(--color-primary);
    left: 0;
    top: 10px;
    z-index: 1002;
  }

  button:hover::after {
    display: block;
  }
`;
