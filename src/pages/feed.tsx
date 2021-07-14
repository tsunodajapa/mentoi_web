import { useState } from 'react';

import Header from '@/modules/common/components/Header';
import HeaderLogouted from '@/modules/logouted/components/Header';

import Footer from '@/modules/common/components/Footer';

import { QuestionProvider } from '@/modules/question/hooks/question';
import { QuestionSection } from '@/modules/question/components/QuestionSection';
import { Main } from '@/shared/components/Main/styles';
import SEO from '@/shared/components/SEO';
import { useAuth } from '@/shared/hooks/auth';
import { GetServerSideProps } from 'next';

import * as questionsServices from '@/modules/question/services/questionsServices';
import Loading from '@/shared/components/Loading';

const Feed = ({ questions }) => {
  const { user, loading } = useAuth();

  const [actualStep, setActualStep] = useState(0);

  const actualNameStep = [
    'ÁREA DE INTERESSE',
    'SUAS PERGUNTAS',
    'PUBLICAR PERGUNTA',
    'MENSAGENS',
    'PERFIL',
  ];

  function handleChangeStep(step: number): void {
    setActualStep(step);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <SEO
        title="Plataforma Educacional para Professores e Alunos | Mentoi"
        description="Plataforma educacional para interação entre estudantes e professores com atuação verificada, garantindo responsabilidade e evitando respostas com erros ou Fake News."
      />
      {user ? (
        <Header actualNameStep={actualNameStep[actualStep]} />
      ) : (
        <HeaderLogouted />
      )}

      <Main>
        <QuestionProvider>
          <QuestionSection step={actualStep} questions={questions} />
        </QuestionProvider>
      </Main>
      {user && <Footer changeStep={handleChangeStep} />}
    </>
  );
};

export default Feed;

export const getServerSideProps: GetServerSideProps = async () => {
  const questions = await questionsServices.getQuestions({
    page: 1,
    pageSize: 10,
  });

  console.log('aqui');

  return { props: { questions } };
};
