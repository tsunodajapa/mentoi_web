import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;

  visible?: boolean;
};

const ButtonIcon = ({
  icon: Icon,
  visible,
  onClick,
  ...rest
}: ButtonIconProps) => {
  return (
    <Container type="button" {...rest} visible={visible} onClick={onClick}>
      <Icon />
    </Container>
  );
};

export default ButtonIcon;
