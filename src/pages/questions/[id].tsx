import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';

import { Question } from '@/modules/question/hooks/question';
import { useEffect } from 'react';
import { AnswerProvider } from '@/modules/question/hooks/answer';
import QuestionPageTemplate from '@/modules/question/components/QuestionPageTemplate';
import SEO from '@/shared/components/SEO';
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

  return (
    <>
      {question && (
        <SEO title={question.title} description={question.description} />
      )}
      <AnswerProvider>
        <QuestionPageTemplate question={question} />
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
