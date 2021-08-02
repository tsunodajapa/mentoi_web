import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;

  visible?: boolean;
  color?: string;
  selected?: boolean;
};

const ButtonIcon = ({
  icon: Icon,
  visible,
  color,
  selected,
  ...rest
}: ButtonIconProps) => {
  return (
    <Container
      type="button"
      visible={visible}
      color={color}
      selected={selected}
      {...rest}
    >
      <Icon />
    </Container>
  );
};

export default ButtonIcon;
