import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;

  visible?: boolean;
  color?: string;
  selected?: boolean;
  hasTransitionRotate?: boolean;
};

const ButtonIcon = ({
  icon: Icon,
  visible,
  color,
  selected,
  hasTransitionRotate,
  ...rest
}: ButtonIconProps) => {
  return (
    <Container
      type="button"
      visible={visible}
      color={color}
      selected={selected}
      hasTransitionRotate={hasTransitionRotate}
      {...rest}
    >
      <Icon />
    </Container>
  );
};

export default ButtonIcon;
