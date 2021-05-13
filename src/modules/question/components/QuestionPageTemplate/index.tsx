import { useRef, useState } from 'react';
import Image from 'next/image';

import {
  RiEmotionLine,
  RiEmotionHappyLine,
  RiEmotionNormalLine,
} from 'react-icons/ri';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Header from '@/modules/common/components/Header';
import { UserSection } from '@/modules/common/components/UserSection';
import SectionBordered, {
  BorderTypes,
} from '@/shared/components/SectionBordered';
import Button from '@/shared/components/Buttons/Button';
import ButtonIcon from '@/shared/components/Buttons/ButtonIcon';
import { TextArea } from '@/shared/components/FormElements';
import getValidationErrors from '@/utils/getValidationErros';
import { Circle } from '@/shared/components/Circle';
import { useToast } from '@/shared/hooks/toast';
import { useAuth } from '@/shared/hooks/auth';
import InfiniteScroll from '@/shared/components/InfiniteScroll';
import { usePermission } from '@/shared/hooks/permission';
import Modal from '@/shared/components/Modal';
import { useAnswer } from '../../hooks/answer';
import QuestionBox from '../QuestionBox';
import { Question } from '../../hooks/question';

import {
  Main,
  AnswersContainer,
  AnswersFooter,
  EvaluateContainer,
} from './style';
import { Content, Header as HeaderAnswer } from '../QuestionBox/styles';
import ModalBeAMentoi from '../ModalBeAMentoi';

interface QuestionPageTemplateProps {
  question: Question;
}

const QuestionPageTemplate = ({ question }: QuestionPageTemplateProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { answers, getAnswers, createAnswer } = useAnswer();
  const { user } = useAuth();
  const useCanAnswerQuestion = usePermission({
    permissions: ['MENTOI'],
  });

  function handleToggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  async function handleSubmitAnswer(data: { answer: string }) {
    try {
      formRef.current?.setErrors({});

      await createAnswer({ text: data.answer });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }
  }

  return (
    <>
      <Header actualNameStep="Teste" />
      <Main>
        <div>
          <SectionBordered border={BorderTypes.FULL}>
            {question && (
              <QuestionBox data={question}>
                <AnswersContainer>
                  {answers &&
                    answers.map(answer => (
                      <Content key={answer.id}>
                        <HeaderAnswer>
                          <div>
                            <div>
                              {answer.user.avatarUrl ? (
                                <Image
                                  src={answer.user.avatarUrl}
                                  alt={answer.user.name}
                                  layout="fill"
                                />
                              ) : (
                                <Circle size={100} />
                              )}
                            </div>
                            <div>
                              <span>
                                {answer.user.displayName || answer.user.name}
                              </span>
                              <span>@{answer.user.nickName}</span>
                            </div>
                          </div>

                          <span>{answer.elapsedTime}</span>
                        </HeaderAnswer>

                        <span>{answer.text}</span>

                        <div>
                          <EvaluateContainer>
                            <ButtonIcon
                              icon={RiEmotionLine}
                              color="--color-success"
                            />
                            <ButtonIcon
                              icon={RiEmotionHappyLine}
                              color="--color-warning"
                            />
                            <ButtonIcon
                              icon={RiEmotionNormalLine}
                              color="--color-error"
                            />
                            <span>Avalie a resposta</span>
                          </EvaluateContainer>

                          <Button
                            text="DENUNCIAR"
                            variant="outlineError"
                            styles={{
                              maxHeight: '2.8rem',
                              alignSelf: 'flex-end',
                            }}
                          />
                        </div>
                      </Content>
                    ))}
                  <InfiniteScroll getService={getAnswers} />
                </AnswersContainer>
                <AnswersFooter>
                  {useCanAnswerQuestion && user && (
                    <Form ref={formRef} onSubmit={handleSubmitAnswer}>
                      <div>
                        <div>
                          {user.avatarUrl ? (
                            <Image
                              src={user.avatarUrl}
                              alt={user.name}
                              layout="fill"
                            />
                          ) : (
                            <Circle size={100} />
                          )}
                        </div>

                        <TextArea
                          id="answers-input"
                          name="answer"
                          placeholder="RESPONDER"
                        />
                      </div>

                      <Button type="submit" text="PUBLICAR" />
                    </Form>
                  )}

                  {!useCanAnswerQuestion && (
                    <Button
                      type="button"
                      onClick={handleToggleModal}
                      text="QUERO RESPONDER"
                    />
                  )}
                </AnswersFooter>
              </QuestionBox>
            )}
          </SectionBordered>
          <div>
            <UserSection />
          </div>
        </div>
      </Main>
      <Modal
        isOpenModal={isOpenModal}
        handleToggleModal={handleToggleModal}
        styles={{ width: '40rem' }}
      >
        <ModalBeAMentoi />
      </Modal>
    </>
  );
};

export default QuestionPageTemplate;
