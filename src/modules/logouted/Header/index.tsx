import { useState } from 'react';
import Link from 'next/link';

import Logo from '@/assets/logo_mentoi.svg';
import Button from '@/shared/Button';
import Modal from '@/shared/Modal';

import { Container } from './styles';
import LoginModal from '../LoginModal';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Container>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          <div>
            <Link href="/signup">
              <a>CADASTRO</a>
            </Link>
            <Button text="ENTRAR" onClick={handleToggleModal} />
          </div>
        </div>
      </Container>

      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <LoginModal />
      </Modal>
    </>
  );
};

export default Header;
