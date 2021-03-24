import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  inline?: boolean;
};

const Button = ({ text, inline = false, ...rest }: ButtonProps) => {
  return (
    <Container type="button" inline={inline} {...rest}>
      {text}
    </Container>
  );
};

export default Button;
