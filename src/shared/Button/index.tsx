import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  visible?: boolean;
};

const Button = ({ text, visible, ...rest }: ButtonProps) => {
  return (
    <Container type="button" {...rest} visible={visible}>
      {text}
    </Container>
  );
};

export default Button;
