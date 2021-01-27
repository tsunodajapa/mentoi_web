import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;
  visible?: boolean;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  visible,
  ...rest
}) => {
  return (
    <Container type="button" {...rest} visible={visible}>
      <Icon />
    </Container>
  );
};

export default ButtonIcon;
