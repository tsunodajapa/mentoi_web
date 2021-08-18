import { usePermission } from '@/shared/hooks/permission';
import { FaCheckCircle } from 'react-icons/fa';

import { Container } from './styles';

interface UserDisplayNameProps {
  hasUser: boolean;
  displayName?: string;
  name: string;
  nickName: string;
  type: string;
}

const UserDisplayName = ({
  displayName,
  name,
  hasUser,
  nickName,
  type,
}: UserDisplayNameProps) => {
  const userHasCheck = ['TEACHER'].includes(type);

  if (!hasUser) {
    return <span>Usuário não cadastrado</span>;
  }

  return (
    <Container>
      <strong>
        {displayName || name}
        {userHasCheck && <FaCheckCircle />}
      </strong>
      <span>@{nickName}</span>
    </Container>
  );
};

export default UserDisplayName;
