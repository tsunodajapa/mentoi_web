import styled, { css } from 'styled-components';

interface ContainerProps {
  inline: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: var(--color-primary);
  color: var(--color-text-in-primary);
  outline: none;
  text-decoration: none;
  border: 0.1rem solid;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;

  ${({ inline }) =>
    inline &&
    css`
      background: none;
      border: none;
      color: var(--color-primary);
    `}
`;
