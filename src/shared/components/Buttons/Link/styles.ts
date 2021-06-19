import styled from 'styled-components';
import { ButtonTypeVariations } from '../Button/styles';
import { Variant } from '../variant';

interface ContainerProps {
  variant?: Variant;
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
