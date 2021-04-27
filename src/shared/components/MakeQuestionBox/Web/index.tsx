import { useState } from 'react';

import { Circle } from '@/shared/components/Circle';
import { useAuth } from '@/hooks/auth';
import Modal from '../../Modal';
import { Container, ModalHeader } from './styles';
import MakeQuestionBox from '..';

const MakeQuestionWeb = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user } = useAuth();

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Container type="button" onClick={handleToggleModal}>
        <div>
          <Circle size={100} />
        </div>
        QUAL SUA DÚVIDA?
      </Container>

      <Modal
        isOpenModal={isOpenModal}
        handleToggleModal={handleToggleModal}
        styles={{ width: '45rem' }}
      >
        {user && (
          <ModalHeader>
            <div>
              <Circle size={100} />
            </div>
            <div>
              <strong>{user.displayName || user.name}</strong>
              <span>@{user.nickName}</span>
            </div>
          </ModalHeader>
        )}
        <MakeQuestionBox />
      </Modal>
    </>
  );
};

export default MakeQuestionWeb;
