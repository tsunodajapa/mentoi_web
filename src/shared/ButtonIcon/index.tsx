import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;

  visible?: boolean;
  color?: string;
};

const ButtonIcon = ({
  icon: Icon,
  visible,
  color,
  onClick,
  ...rest
}: ButtonIconProps) => {
  return (
    <Container
      type="button"
      visible={visible}
      onClick={onClick}
      color={color}
      {...rest}
    >
      <Icon />
    </Container>
  );
};

export default ButtonIcon;
