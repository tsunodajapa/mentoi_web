import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ComponentType<IconBaseProps>;
};

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      <Icon />
    </Container>
  );
};

export default ButtonIcon;
