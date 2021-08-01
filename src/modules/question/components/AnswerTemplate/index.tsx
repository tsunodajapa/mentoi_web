import { useState } from 'react';
import Button from '@/shared/components/Buttons/Button';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';
import {
  RiEmotionHappyLine,
  RiEmotionLine,
  RiEmotionNormalLine,
} from 'react-icons/ri';
import UserImage from '@/modules/common/components/UserImage';
import { useAuth } from '@/shared/hooks/auth';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import WindowSelect from '@/shared/components/WindowSelect';
import Modal from '@/shared/components/Modal';
import { MdDelete } from 'react-icons/md';
import { useToast } from '@/shared/hooks/toast';

import { ModalContainer } from '@/shared/components/Modal/styles';
import { EvaluateContainer } from './styles';
import {
  Content,
  Header as HeaderAnswer,
  WindowSelectStyles,
} from '../QuestionBox/styles';
import { Answer, useAnswer } from '../../hooks/answer';
import ModalComplaint from '../ModalComplaint';

interface AnswerTemplateProps {
  answer: Answer;
}

const AnswerTemplate = ({ answer }: AnswerTemplateProps) => {
  const { user: userLogged } = useAuth();
  const { addToast } = useToast();
  const { removeAnswer } = useAnswer();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenComplaintModal, setIsOpenComplaintModal] = useState(false);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleToggleComplaintModal() {
    setIsOpenComplaintModal(!isOpenComplaintModal);
  }

  async function handleDeleteAnswer() {
    try {
      await removeAnswer(answer.id);

      addToast({
        type: 'success',
        title: 'Resposta removida com sucesso',
        description: 'Sua resposta foi removida com sucesso.',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro',
        description:
          'Ocorreu um erro ao tentar apagar a resposta, tente novamente.',
      });
    }
  }

  return (
    <>
      <Content key={answer.id}>
        <HeaderAnswer>
          <div>
            <div>
              <UserImage
                avatarUrl={answer.user ? answer.user.avatarUrl : null}
                name={answer.user ? answer.user.name : 'Usuário não cadastrado'}
                color={answer.user ? answer.user.color : '#D3D3D3'}
                gender={answer.user ? answer.user.gender : 'OTHER'}
              />
            </div>
            <div>
              <span>
                {answer.user
                  ? answer.user.displayName || answer.user.name
                  : 'Usuário não cadastrado'}
              </span>
              <span>@{answer.user && answer.user.nickName}</span>
            </div>
          </div>

          <span>{answer.elapsedTime}</span>
          {answer.user &&
            userLogged &&
            answer.user.nickName === userLogged.nickName && (
              <WindowSelect
                id={`window-select-${answer.id}`}
                icon={HiOutlineDotsHorizontal}
                styles={WindowSelectStyles}
                size={1.4}
              >
                <button type="button" onClick={handleToggleModal}>
                  Excluir
                </button>
              </WindowSelect>
            )}
        </HeaderAnswer>

        <span>{answer.text}</span>

        <div>
          <EvaluateContainer>
            <ButtonIcon icon={RiEmotionLine} color="--color-success" />
            <ButtonIcon icon={RiEmotionHappyLine} color="--color-warning" />
            <ButtonIcon icon={RiEmotionNormalLine} color="--color-error" />
            <span>Avalie a resposta</span>
          </EvaluateContainer>

          <Button
            text="DENUNCIAR"
            variant="outlineError"
            styles={{
              maxHeight: '2.8rem',
              alignSelf: 'flex-end',
              padding: '0.4rem 1rem',
            }}
            onClick={handleToggleComplaintModal}
          />
        </div>
      </Content>
      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <ModalContainer>
          <MdDelete />
          <p>Tem certeza que deseja excluir essa resposta?</p>
          <Button text="Confirmar" onClick={handleDeleteAnswer} />
        </ModalContainer>
      </Modal>
      <ModalComplaint
        questionId={answer.questionId}
        answerId={answer.id}
        handleToggleModal={handleToggleComplaintModal}
        isOpenModal={isOpenComplaintModal}
      />
    </>
  );
};

export default AnswerTemplate;
