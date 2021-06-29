import { ButtonHTMLAttributes } from 'react';
import { Variant } from '../variant';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant?: Variant;
  styles?: object;
  color?: string;
  selected?: boolean;
};

const Button = ({
  text,
  variant,
  color,
  styles,
  selected,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      type="button"
      variant={variant}
      color={color}
      style={styles}
      selected={selected}
      {...rest}
    >
      {text}
    </Container>
  );
};

export default Button;
