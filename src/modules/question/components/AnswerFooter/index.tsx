import { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Button from '@/shared/components/Buttons/Button';
import { TextArea } from '@/shared/components/FormElements';
import Modal from '@/shared/components/Modal';

import { useAuth } from '@/shared/hooks/auth';
import { usePermission } from '@/shared/hooks/permission';
import { useToast } from '@/shared/hooks/toast';
import UserImage from '@/modules/common/components/UserImage';
import { useAnswer } from '../../hooks/answer';

import ModalBeAMentoi from '../ModalBeAMentoi';

import { Container } from './styles';

const AnswerFooter = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { user } = useAuth();
  const { createAnswer } = useAnswer();

  const useCanAnswerQuestion = usePermission({
    permissions: ['MENTOI'],
  });

  async function handleSubmitAnswer(data: { answer: string }) {
    try {
      formRef.current?.setErrors({});

      if (!data.answer.trim()) {
        addToast({
          type: 'error',
          title: 'Resposta não pode ser vazia',
          description: 'Escreva uma resposta',
        });
        return;
      }

      await createAnswer({ text: data.answer });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao enviar resposta',
        description: 'Tente novamente.',
      });
    }
  }

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  if (!useCanAnswerQuestion || !user) {
    return (
      <>
        <Container>
          <Button
            type="button"
            onClick={handleToggleModal}
            text="QUERO RESPONDER"
          />
        </Container>
        <Modal
          isOpenModal={isOpenModal}
          handleToggleModal={handleToggleModal}
          styles={{ width: '40rem' }}
        >
          <ModalBeAMentoi />
        </Modal>
      </>
    );
  }

  return (
    <>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmitAnswer}>
          <div>
            <div>
              <UserImage
                avatarUrl={user.avatarUrl}
                name={user.name}
                color={user.color}
                gender={user.gender}
              />
            </div>

            <TextArea
              id="answers-input"
              name="answer"
              placeholder="RESPONDER"
            />
          </div>
          <Button type="submit" text="PUBLICAR" />
        </Form>
      </Container>
    </>
  );
};

export default AnswerFooter;
