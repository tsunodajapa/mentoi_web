import { ButtonHTMLAttributes } from 'react';
import { Variant } from '../variant';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant?: Variant;
  styles?: object;
};

const Button = ({ text, variant, styles, ...rest }: ButtonProps) => {
  return (
    <Container type="button" variant={variant} style={styles} {...rest}>
      {text}
    </Container>
  );
};

export default Button;
