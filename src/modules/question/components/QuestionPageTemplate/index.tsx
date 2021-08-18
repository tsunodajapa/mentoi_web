import { useEffect, useState } from 'react';
import { RiEmotionLine, RiEmotionSadLine } from 'react-icons/ri';

import Header from '@/modules/common/components/Header';
import HeaderLogouted from '@/modules/logouted/components/Header';
import { UserSection } from '@/modules/common/components/UserSection';
import SectionBordered from '@/shared/components/SectionBordered';
import { useAuth } from '@/shared/hooks/auth';
import InfiniteScroll from '@/shared/components/InfiniteScroll';
import { usePermission } from '@/shared/hooks/permission';
import { Answer, useAnswer } from '../../hooks/answer';
import QuestionBox from '../QuestionBox';
import { Question } from '../../hooks/question';

import { Main, AnswersContainer, BestAnswerTemplate } from './style';

import FiltersBox from '../FiltersBox';
import AnswerTemplate from '../AnswerTemplate';
import AnswerFooter from '../AnswerFooter';
import { getBestAnswer } from '../../services/questionsServices';

interface QuestionPageTemplateProps {
  question: Question;
}

const QuestionPageTemplate = ({ question }: QuestionPageTemplateProps) => {
  const { answers, getAnswers } = useAnswer();
  const { user } = useAuth();
  const useCanAnswerQuestion = usePermission({
    permissions: ['MENTOI', 'ADMIN'],
  });
  const [bestAnswer, setBestAnswer] = useState<Answer | undefined>();

  useEffect(() => {
    async function handleGetBestAnswer() {
      try {
        const response = await getBestAnswer(question.id);

        setBestAnswer(response);
      } catch (error) {
        console.error(error);
      }
    }

    handleGetBestAnswer();
  }, [question, user]);

  return (
    <>
      {user && <Header actualNameStep="Teste" />}
      {!user && <HeaderLogouted />}
      <Main>
        <SectionBordered>
          {question && (
            <QuestionBox data={question}>
              <AnswersContainer useCanAnswerQuestion={useCanAnswerQuestion}>
                {bestAnswer && (
                  <BestAnswerTemplate>
                    <h3>
                      <RiEmotionLine /> RESPOSTA DESTAQUE
                    </h3>
                    <AnswerTemplate answer={bestAnswer} />
                  </BestAnswerTemplate>
                )}

                {!!answers.length &&
                  answers.map(answer => {
                    return !bestAnswer || answer.id !== bestAnswer.id ? (
                      <AnswerTemplate key={answer.id} answer={answer} />
                    ) : null;
                  })}
                <InfiniteScroll getService={getAnswers} />
              </AnswersContainer>
              {!answers.length && (
                <span>
                  <RiEmotionSadLine />
                  Não há respostas ainda
                </span>
              )}
              <AnswerFooter />
            </QuestionBox>
          )}
        </SectionBordered>
        <div>
          <aside>
            <UserSection />
            {!user && <FiltersBox />}
          </aside>
        </div>
      </Main>
    </>
  );
};

export default QuestionPageTemplate;
