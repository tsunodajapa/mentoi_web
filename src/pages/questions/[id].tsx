import Header from '@/modules/common/components/Header';
import { UserSection } from '@/modules/common/components/UserSection';
import SectionBordered, {
  BorderTypes,
} from '@/shared/components/SectionBordered';
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';

import { Main } from '@/styles/pages/questions/[id]';
import QuestionBox from '@/modules/question/components/QuestionBox';
import { Question } from '@/modules/question/hooks/question';
import { useEffect } from 'react';
import { AnswerProvider } from '@/modules/question/hooks/answer';
import * as questionsServices from '../../modules/question/services/questionsServices';

interface QuestionPageProps {
  question: Question;
}

type NextGetStaticPropsCtx = {
  params: {
    id: string;
  };
};

const QuestionPage = ({ question }: QuestionPageProps) => {
  useEffect(() => {
    document.body.style.overflowY = 'auto';
  }, []);

  useEffect(() => {
    document.body.style.overflowY = 'auto';
  }, []);

  return (
    <>
      <AnswerProvider>
        <Header actualNameStep="Teste" />
        <Main>
          <div>
            <SectionBordered border={BorderTypes.FULL}>
              {question && <QuestionBox data={question} isQuestionPage />}
            </SectionBordered>
            <div>
              <UserSection />
            </div>
          </div>
        </Main>
      </AnswerProvider>
    </>
  );
};

export default QuestionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const questions = await questionsServices.getQuestions({
    page: 1,
    pageSize: 15,
  });

  const paths = questions.map(question => ({ params: { id: question.id } }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: NextGetStaticPropsCtx): Promise<GetStaticPropsResult<QuestionPageProps>> => {
  const question = await questionsServices.showQuestion(params.id);

  return {
    props: {
      question,
    },
    revalidate: 60,
  };
};
