import styled, { css } from 'styled-components';

interface ContainerProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'outlineError'
    | 'inlinePrimary'
    | 'inlineSecondary';
}

const ButtonTypeVariations = {
  primary: css`
    background: var(--color-primary);
    color: var(--color-text-in-primary);
    border: 0.1rem solid;

    &:hover {
      background: var(--color-primary-dark);
      color: var(--color-text-in-primary);
    }
  `,
  secondary: css`
    background: var(--color-secondary);
    color: var(--color-text-in-primary);
    border: 0.1rem solid;
  `,
  error: css`
    background: var(--color-red);
    color: var(--color-text-in-primary);
    border: 0.1rem solid;
  `,
  outlineError: css`
    background: none;
    color: var(--color-red);
    border: 0.1rem solid var(--color-red);
  `,
  inlinePrimary: css`
    background: none;
    color: var(--color-primary);
    border: none;
  `,
  inlineSecondary: css`
    background: none;
    color: var(--color-secondary);
    border: none;
  `,
};

export const Container = styled.button<ContainerProps>`
  ${({ variant }) => ButtonTypeVariations[variant || 'primary']}

  outline: none;
  text-decoration: none;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  transition: background-color 0.2s linear;
`;
