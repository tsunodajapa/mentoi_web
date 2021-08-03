import { useRef, useState } from 'react';
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
import { useEffect } from 'react';
import { EvaluateContainer } from './styles';
import {
  Content,
  Description,
  Header as HeaderAnswer,
  WindowSelectStyles,
} from '../QuestionBox/styles';
import { Answer, useAnswer } from '../../hooks/answer';
import ModalComplaint from '../ModalComplaint';
import { evaluation } from '../../services/questionsServices';
import { ANSWERS_EVALUATIONS } from '../../consts/AnswersEvaluations';

interface AnswerTemplateProps {
  answer: Answer;
}

const AnswerTemplate = ({ answer }: AnswerTemplateProps) => {
  const { user: userLogged } = useAuth();
  const { addToast } = useToast();
  const descriptionRef = useRef(null);
  const { removeAnswer } = useAnswer();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [
    selectedEvaluation,
    setSelectedEvaluation,
  ] = useState<ANSWERS_EVALUATIONS>(null);
  const [isOpenComplaintModal, setIsOpenComplaintModal] = useState(false);
  const [isTextEllipsis, setIsTextEllipsis] = useState(true);
  const [textNeedEllipsis, setTextNeedEllipsis] = useState(false);

  useEffect(() => {
    if (answer.evaluations && answer.evaluations.length) {
      setSelectedEvaluation(answer.evaluations[0].type);
    }
  }, [answer]);

  useEffect(() => {
    if (descriptionRef.current) {
      setTextNeedEllipsis(
        descriptionRef.current.offsetHeight <
          descriptionRef.current.scrollHeight,
      );
    }
  }, []);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleToggleSeeDescription() {
    setIsTextEllipsis(oldState => !oldState);
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

  async function handleEvaluation(type: ANSWERS_EVALUATIONS) {
    if (!userLogged) {
      addToast({
        type: 'error',
        title: 'Usuário não autenticado.',
        description: 'Cadastre-se ou realize login para avaliar uma resposta.',
      });
      return;
    }

    try {
      setSelectedEvaluation(type);
      await evaluation(answer.questionId, answer.id, { type });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro',
        description:
          'Ocorreu um erro ao avaliar essa resposta. Tente novamente.',
      });
      setSelectedEvaluation(null);
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

        <Description
          ref={descriptionRef}
          isTextEllipsis={isTextEllipsis}
          textNeedEllipsis={textNeedEllipsis}
        >
          <p>{answer.text}</p>
          {textNeedEllipsis && (
            <button type="button" onClick={handleToggleSeeDescription}>
              {isTextEllipsis ? 'Ver mais' : 'Ver menos'}
            </button>
          )}
        </Description>

        <div>
          <EvaluateContainer>
            <ButtonIcon
              icon={RiEmotionLine}
              color="--color-success"
              title="Perfeito"
              selected={selectedEvaluation === ANSWERS_EVALUATIONS.PERFECT}
              onClick={() => handleEvaluation(ANSWERS_EVALUATIONS.PERFECT)}
              hasTransitionRotate
            />
            <ButtonIcon
              icon={RiEmotionHappyLine}
              color="--color-tertiary"
              title="Bom"
              selected={selectedEvaluation === ANSWERS_EVALUATIONS.GOOD}
              onClick={() => handleEvaluation(ANSWERS_EVALUATIONS.GOOD)}
              hasTransitionRotate
            />
            <ButtonIcon
              icon={RiEmotionNormalLine}
              color="--color-error"
              title="Ruim"
              selected={selectedEvaluation === ANSWERS_EVALUATIONS.BAD}
              onClick={() => handleEvaluation(ANSWERS_EVALUATIONS.BAD)}
              hasTransitionRotate
            />
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
