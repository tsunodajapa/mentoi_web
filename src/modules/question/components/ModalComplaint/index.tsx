import { useRef } from 'react';
import { FormHandles } from '@unform/core';

import Button from '@/shared/components/Buttons/Button';
import { TextArea } from '@/shared/components/FormElements';
import Modal from '@/shared/components/Modal';
import { ModalContainer } from '@/shared/components/Modal/styles';
import { useToast } from '@/shared/hooks/toast';

import { FaExclamationTriangle } from 'react-icons/fa';
import { complaint } from '../../services/questionsServices';
import { Form } from './styles';

interface ModalProps {
  questionId: string;
  answerId?: string;
  isOpenModal: boolean;
  handleToggleModal(): void;
}

const ModalComplaint = ({
  questionId,
  answerId,
  isOpenModal,
  handleToggleModal,
}: ModalProps) => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const type = answerId ? 'Resposta' : 'Pergunta';

  async function handleComplaint(data: { observation: string }): Promise<void> {
    try {
      await complaint(questionId, { answerId, ...data });
      addToast({
        type: 'success',
        title: `${type} denunciada com sucesso`,
        description: 'Iremos analisar sua denúncia.',
      });
      handleToggleModal();
      formRef.current.reset();
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro',
        description:
          'Ocorreu um erro ao tentar registrar a denúncia, por favor tente novamente.',
      });
    }
  }

  return (
    <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
      <ModalContainer>
        <FaExclamationTriangle />
        <p>Tem certeza que deseja denunciar essa {type.toLowerCase()}?</p>
        <Form onSubmit={handleComplaint} ref={formRef}>
          <TextArea
            id={`complainttextarea-${answerId || questionId}`}
            name="observation"
            placeholder="Digite o motivo da denúncia"
          />
          <Button type="submit" text="Confirmar" />
        </Form>
      </ModalContainer>
    </Modal>
  );
};

export default ModalComplaint;
