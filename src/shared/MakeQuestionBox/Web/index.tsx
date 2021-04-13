import { useState } from 'react';

import Modal from '../../Modal';
import { Container } from './styles';
import MakeQuestionBox from '..';

const MakeQuestionWeb = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Container type="button" onClick={handleToggleModal}>
        <div />
        QUAL SUA DÚVIDA?
      </Container>

      <Modal
        isOpenModal={isOpenModal}
        handleToggleModal={handleToggleModal}
        styles={{ width: '45rem' }}
      >
        <MakeQuestionBox />
      </Modal>
    </>
  );
};

export default MakeQuestionWeb;
