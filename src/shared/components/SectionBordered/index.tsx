import { ReactNode } from 'react';
import { Container } from './styles';

export enum BorderTypes {
  TOP,
  BOTTOM,
  FULL,
}

interface SectionBorderedProps {
  border?: BorderTypes;
  children: ReactNode;
}

const SectionBordered = ({ border, children }: SectionBorderedProps) => {
  return <Container border={border}>{children}</Container>;
};

export default SectionBordered;
