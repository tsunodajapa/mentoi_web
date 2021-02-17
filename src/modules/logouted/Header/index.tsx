import { useState } from 'react';

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
          <Logo />

          <div>
            <a href="#_">CADASTRO</a>
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
