import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <Container type="button" {...rest}>
      {text}
    </Container>
  );
};

export default Button;
