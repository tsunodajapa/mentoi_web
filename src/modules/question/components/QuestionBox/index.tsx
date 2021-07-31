import { ReactNode, useMemo, useRef, useState } from 'react';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';

import { Question, useQuestion } from '@/modules/question/hooks/question';

import subjects from '@/data/subjects';

import WindowSelect from '@/shared/components/WindowSelect';
import { useAuth } from '@/shared/hooks/auth';
import Modal from '@/shared/components/Modal';
import Button from '@/shared/components/Buttons/Button';
import { useRouter } from 'next/router';
import { useToast } from '@/shared/hooks/toast';
import UserImage from '@/modules/common/components/UserImage';
import FilesPreview from '@/shared/components/FilesPreview';

import { useEffect } from 'react';
import * as questionsServices from '../../services/questionsServices';

import {
  Container,
  Content,
  Header,
  WindowSelectStyles,
  ModalContainer,
  Description,
} from './styles';
import { Link } from '../../../../shared/components/Buttons/Link';

interface QuestionBoxProps {
  data: Question;
  idAlternative?: string;

  children?: ReactNode;
}

const QuestionBox = ({
  data: { id, description, title, areasInterest, files, user, elapsedTime },
  idAlternative,
  children,
}: QuestionBoxProps) => {
  const { user: userLogged } = useAuth();
  const { addToast } = useToast();
  const { questions, removeQuestion } = useQuestion();
  const router = useRouter();
  const descriptionRef = useRef(null);

  const [titleColor, setTitleColor] = useState<[string, string]>();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isTextEllipsis, setIsTextEllipsis] = useState(true);
  const [textNeedEllipsis, setTextNeedEllipsis] = useState(false);

  useEffect(() => {
    if (descriptionRef.current) {
      setTextNeedEllipsis(
        descriptionRef.current.offsetHeight <
          descriptionRef.current.scrollHeight,
      );
    }
  }, []);

  const Title = useMemo(() => {
    if (areasInterest.length > 1) {
      const [subjectFirst, subjectSecond] = subjects.filter(
        subject =>
          subject.name === areasInterest[0].name ||
          subject.name === areasInterest[1].name,
      );

      setTitleColor(
        subjectFirst.name === areasInterest[0].name
          ? [subjectFirst.color, subjectSecond.color]
          : [subjectSecond.color, subjectFirst.color],
      );

      return `# ${areasInterest[0].name.toUpperCase()} + # ${areasInterest[1].name.toUpperCase()}`;
    }
    if (areasInterest.length) {
      const subjectFound = subjects.find(
        subject => subject.name === areasInterest[0].name,
      );

      if (subjectFound) {
        const { color } = subjectFound;
        setTitleColor([color, color]);
      }
      return `# ${areasInterest[0].name.toUpperCase()}`;
    }
    return title;
  }, [areasInterest, title]);

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  async function handleDeleteQuestion() {
    try {
      await questionsServices.deleteQuestion(id);

      addToast({
        type: 'success',
        title: 'Pergunta removida com sucesso',
        description: 'Sua pergunta foi removida com sucesso.',
      });

      if (questions) {
        removeQuestion(id);
      } else {
        router.push('/feed');
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro',
        description:
          'Ocorreu um erro ao tentar apagar a pergunta, tente novamente.',
      });
    }
  }

  function handleToggleSeeDescription() {
    setIsTextEllipsis(oldState => !oldState);
  }

  return (
    <Container titleColor={titleColor} isQuestionPage={!!children}>
      <div>
        <span>{Title}</span>
      </div>

      <div>
        <Content>
          <Header>
            <div>
              <div>
                <UserImage
                  avatarUrl={user ? user.avatarUrl : null}
                  name={user ? user.name : 'Usuário não cadastrado'}
                  color={user ? user.color : '#D3D3D3'}
                  gender={user ? user.gender : 'OTHER'}
                />
              </div>

              <div>
                <span>
                  {user
                    ? user.displayName || user.name
                    : 'Usuário não cadastrado'}
                </span>
                <span>@{user && user.nickName}</span>
              </div>
            </div>
            <span>{elapsedTime}</span>
            {user && userLogged && user.nickName === userLogged.nickName && (
              <WindowSelect
                id={idAlternative || `window-select-${id}`}
                icon={HiOutlineDotsHorizontal}
                styles={WindowSelectStyles}
                size={1.4}
              >
                <button type="button" onClick={handleToggleModal}>
                  Excluir
                </button>
              </WindowSelect>
            )}
          </Header>
          <Description
            ref={descriptionRef}
            isTextEllipsis={isTextEllipsis}
            textNeedEllipsis={textNeedEllipsis}
          >
            <p>{description}</p>
            {textNeedEllipsis && (
              <button type="button" onClick={handleToggleSeeDescription}>
                {isTextEllipsis ? 'Ver mais' : 'Ver menos'}
              </button>
            )}
          </Description>
          {!children && (
            <div>
              <div />
              {/* <div>
                <FaComment />
                <span>2</span>
              </div> */}
              {id && (
                <Link
                  href={`questions/${id}`}
                  text="Ver Respostas"
                  variant="outlinePrimary"
                />
              )}
            </div>
          )}
          {children && !!files.length && <FilesPreview files={files} />}
        </Content>
        {children}
      </div>

      <Modal isOpenModal={isOpenModal} handleToggleModal={handleToggleModal}>
        <ModalContainer>
          <MdDelete />
          <p>Tem certeza que deseja excluir essa pergunta?</p>
          <Button text="Confirmar" onClick={handleDeleteQuestion} />
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default QuestionBox;
