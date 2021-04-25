import { ReactNode } from 'react';
import LinkNext from 'next/link';
import { Container } from './styles';

interface LinkProps {
  text?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'inlinePrimary'
    | 'inlineSecondary'
    | 'outlinePrimary'
    | 'outlineSecondary';
  href: string;
  children?: ReactNode;
}

const Link = ({ text, variant, href }: LinkProps) => {
  return (
    <LinkNext href={href}>
      <Container variant={variant}>{text}</Container>
    </LinkNext>
  );
};

export { Link };
