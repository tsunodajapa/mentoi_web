// import { Container } from './styles';

import { usePermission } from '@/shared/hooks/permission';
import { ReactNode } from 'react';

interface CanSeeComponentProps {
  children: ReactNode;
  permissions: string[];
}

const CanSeeComponent = ({ children, permissions }: CanSeeComponentProps) => {
  const userCanSeeComponent = usePermission({ permissions });

  if (!userCanSeeComponent) return null;

  return <>{children}</>;
};

export default CanSeeComponent;
