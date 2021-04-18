import { ReactNode } from 'react';
import { Container } from './styles';

interface ContentBoxProps {
  children: ReactNode;
}

const ContentBox = ({ children }: ContentBoxProps) => {
  return <Container>{children}</Container>;
};

export default ContentBox;
