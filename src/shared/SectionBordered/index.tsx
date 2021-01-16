import { Container } from './styles';

export enum BorderTypes {
  TOP,
  BOTTOM,
  FULL,
}

interface SectionBorderedProps {
  border: BorderTypes;
}

const SectionBordered: React.FC<SectionBorderedProps> = ({
  border,
  children,
}) => {
  return <Container border={border}>{children}</Container>;
};

export default SectionBordered;
