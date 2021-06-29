import { RiEmotionSadLine } from 'react-icons/ri';

import Header from '@/modules/common/components/Header';
import HeaderLogouted from '@/modules/logouted/components/Header';
import { UserSection } from '@/modules/common/components/UserSection';
import SectionBordered from '@/shared/components/SectionBordered';
import { useAuth } from '@/shared/hooks/auth';
import InfiniteScroll from '@/shared/components/InfiniteScroll';
import { usePermission } from '@/shared/hooks/permission';
import { useAnswer } from '../../hooks/answer';
import QuestionBox from '../QuestionBox';
import { Question } from '../../hooks/question';

import { Main, AnswersContainer } from './style';

import FiltersBox from '../FiltersBox';
import AnswerTemplate from '../AnswerTemplate';
import AnswerFooter from '../AnswerFooter';

interface QuestionPageTemplateProps {
  question: Question;
}

const QuestionPageTemplate = ({ question }: QuestionPageTemplateProps) => {
  const { answers, getAnswers } = useAnswer();
  const { user } = useAuth();
  const useCanAnswerQuestion = usePermission({
    permissions: ['MENTOI'],
  });

  return (
    <>
      {user && <Header actualNameStep="Teste" />}
      {!user && <HeaderLogouted />}
      <Main>
        <SectionBordered>
          {question && (
            <QuestionBox data={question}>
              <AnswersContainer useCanAnswerQuestion={useCanAnswerQuestion}>
                {!!answers.length &&
                  answers.map(answer => (
                    <AnswerTemplate key={answer.id} answer={answer} />
                  ))}
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
          <UserSection />
          {!user && <FiltersBox />}
        </div>
      </Main>
    </>
  );
};

export default QuestionPageTemplate;
