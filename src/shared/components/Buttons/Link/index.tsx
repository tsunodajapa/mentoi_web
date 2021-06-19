import { ReactNode } from 'react';
import LinkNext from 'next/link';
import { Container } from './styles';
import { Variant } from '../variant';

interface LinkProps {
  text?: string;
  variant?: Variant;
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
