import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant?: 'primary' | 'secondary' | 'inlinePrimary' | 'inlineSecondary';
};

const Button = ({ text, variant, ...rest }: ButtonProps) => {
  return (
    <Container type="button" variant={variant} {...rest}>
      {text}
    </Container>
  );
};

export default Button;
