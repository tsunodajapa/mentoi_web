import styled, { css } from 'styled-components';

interface ContainerProps {
  variant?: 'primary' | 'secondary' | 'inlinePrimary' | 'inlineSecondary';
}

const ButtonTypeVariations = {
  primary: css`
    background: var(--color-primary);
    color: var(--color-text-in-primary);
    border: 0.1rem solid;
  `,
  secondary: css`
    background: var(--color-secondary);
    color: var(--color-text-in-primary);
    border: 0.1rem solid;
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
`;
