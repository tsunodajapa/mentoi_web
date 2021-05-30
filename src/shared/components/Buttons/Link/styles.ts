import styled, { css } from 'styled-components';
import { ButtonTypeVariations } from '../Button/styles';

interface ContainerProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'inlinePrimary'
    | 'inlineSecondary'
    | 'outlinePrimary'
    | 'outlineSecondary';
}

export const Container = styled.a<ContainerProps>`
  ${({ variant }) => ButtonTypeVariations[variant || 'primary']}

  margin: 0 0.8rem;
  outline: none;
  text-decoration: none;
  border-radius: 1.5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;

  transition: background-color 0.2s linear;
`;
