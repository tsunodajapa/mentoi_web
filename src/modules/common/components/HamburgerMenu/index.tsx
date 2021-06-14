import { useAuth } from '@/shared/hooks/auth';
import Link from 'next/link';

import { Container } from './styles';

const HamburgerMenu = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <div>
        <input type="checkbox" />

        <span />
        <span />
        <span />

        <ul id="menu">
          <li>
            <Link href={`/me/${user?.nickName}/edit`}>Editar Conta</Link>
          </li>
          <li>
            <button type="button" onClick={signOut}>
              Sair
            </button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default HamburgerMenu;
