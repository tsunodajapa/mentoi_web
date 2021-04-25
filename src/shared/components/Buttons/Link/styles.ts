import styled, { css } from 'styled-components';

interface ContainerProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'inlinePrimary'
    | 'inlineSecondary'
    | 'outlinePrimary'
    | 'outlineSecondary';
}

const LinkTypeVariations = {
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
  outlinePrimary: css`
    background: none;
    color: var(--color-primary);
    border: 0.1rem solid var(--color-primary);
  `,
  outlineSecondary: css`
    background: none;
    color: var(--color-secondary);
    border: 0.1rem solid var(--color-secondary);
  `,
};
export const Container = styled.a<ContainerProps>`
  ${({ variant }) => LinkTypeVariations[variant || 'primary']}

  margin: 0 0.8rem;
  outline: none;
  text-decoration: none;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  &:hover {
    background: var(--color-primary);
    color: var(--color-text-in-primary);
  }
`;
