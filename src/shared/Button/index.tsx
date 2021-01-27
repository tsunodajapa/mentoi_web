import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  visible?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, visible, ...rest }) => {
  return (
    <Container type="button" {...rest} visible={visible}>
      {text}
    </Container>
  );
};

export default Button;
