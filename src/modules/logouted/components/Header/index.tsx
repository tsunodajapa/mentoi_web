import { useState } from 'react';
import Link from 'next/link';

import Logo from '@/assets/logo_mentoi.svg';
import Button from '@/shared/components/Buttons/Button';
import { Link as LinkAction } from '@/shared/components/Buttons/Link';
import Modal from '@/shared/components/Modal';

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
            <Button text="ENTRAR" onClick={handleToggleModal} />
            <LinkAction
              href="/signup"
              text="CADASTRE-SE"
              variant="outlinePrimary"
            />
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
