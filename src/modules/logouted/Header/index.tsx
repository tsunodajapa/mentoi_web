import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@/assets/logo_mentoi.svg';
import Button from '@/shared/Button';
import Modal from '@/shared/Modal';

import { Container } from './styles';
import LoginModal from '../LoginModal';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  const isSignUpRoute = router.pathname === '/signup';

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Container onlyLogo={isSignUpRoute}>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          {!isSignUpRoute && (
            <div>
              <Link href="/signup">
                <a>CADASTRO</a>
              </Link>
              <Button text="ENTRAR" onClick={handleToggleModal} />
            </div>
          )}
        </div>
      </Container>

      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <LoginModal />
      </Modal>
    </>
  );
};

export default Header;
