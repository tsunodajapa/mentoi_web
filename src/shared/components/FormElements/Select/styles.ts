import styled, { css } from 'styled-components';
import { ContainerDefault } from '../styles';

interface SelectProps {
  optionsPosition: 'bottom' | 'top';
}

interface MultiSelectInputProps {
  width: number;
  background: string;
}

export const Container = styled(ContainerDefault)``;

export const SelectDesktop = styled.div`
  :hover {
    border-color: var(--color-primary);
  }

  label {
    width: 100%;
    height: 2.9rem;
    overflow: hidden;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 1000;
  }

  > label:after {
    content: '\u203a';
    font-size: 2.5rem;
    position: absolute;
    right: 1rem;
    top: 0rem;
    color: var(--color-text-complement);
    transition: ease-in 0.2s;
  }

  & > input {
    display: none;
  }

  input:checked ~ div {
    display: flex;
  }

  input:checked + label:after {
    transform: rotate(90deg);
    top: 0.2rem;
  }

  button {
    background: none;
    border: none;
    padding: 1rem;
    text-align: start;

    position: relative;
    cursor: pointer;
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

  button svg {
    color: var(--color-primary);
    margin-right: 0.4rem;
  }
`;

export const Options = styled.div<SelectProps>`
  display: none;
  position: absolute;
  background-color: var(--color-background);
  width: 100%;
  max-height: 20rem;
  overflow: auto;
  flex-direction: column;

  border-radius: 0.6rem;
  /* padding: 0.5rem; */
  left: 0;
  z-index: 1001;

  ${({ optionsPosition }) => css`
    ${optionsPosition}: 3.6rem;
  `}

  box-shadow: 0 0px 2px 0px rgb(0 0 0 / 44%);
`;

export const MultiSelect = styled.div`
  display: flex;
  max-height: 2.9rem;
  max-width: 90%;
  position: absolute;
  z-index: 999;
  overflow: hidden;
  padding: 0.3rem;
`;

export const MultiSelectInput = styled.input<MultiSelectInputProps>`
  ${({ width, background }) =>
    css`
      width: ${width}ch;
      background-color: ${background};
    `}

  text-overflow: ellipsis;
  border: none;
  border-radius: 1.2rem;
  color: #fff;
  padding: 0.2rem 0.6rem;
  text-align: center;

  & + input {
    margin-left: 0.5rem;
  }
`;
