import { useState } from 'react';

import { Circle } from '@/shared/components/Circle';
import Modal from '../../Modal';
import { Container, ModalHeader } from './styles';
import MakeQuestionBox from '..';

const MakeQuestionWeb = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
        <ModalHeader>
          <div>
            <Circle size={100} />
          </div>
          <div>
            <strong>Professor CZ</strong>
            <span>@professorczx</span>
          </div>
        </ModalHeader>
        <MakeQuestionBox />
      </Modal>
    </>
  );
};

export default MakeQuestionWeb;
