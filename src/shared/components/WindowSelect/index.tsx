import { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FlattenSimpleInterpolation } from 'styled-components';
import { Container } from './styles';

interface WindowSelectProps {
  id: string;
  children: ReactNode;
  icon?: React.ComponentType<IconBaseProps>;
  styles?: FlattenSimpleInterpolation;
  size?: number;
}

const WindowSelect = ({
  id,
  styles,
  size,
  children,
  icon: Icon,
}: WindowSelectProps) => {
  return (
    <Container styles={styles} size={size}>
      <input id={id} type="checkbox" name="menu" />
      <label htmlFor={id}>{Icon && <Icon />}</label>
      <div>{children}</div>
    </Container>
  );
};

export default WindowSelect;
