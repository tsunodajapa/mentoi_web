import { useEffect, useState } from 'react';

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

declare global {
  interface Window {
    OneSignal: any;
  }
}

const Feed = ({ questions }) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    function onesignalPush() {
      const OneSignal = window.OneSignal || [];
      OneSignal.push(() => {
        OneSignal.init({
          appId: '18825cdf-5ebb-4fca-9418-c8e526aa108d',
          safari_web_id:
            'web.onesignal.auto.5f80e2fb-b063-4ecb-90f7-0c7e45de9678',

          allowLocalhostAsSecureOrigin: true,
        });
        OneSignal.setExternalUserId(user.id);
      });
    }

    user && onesignalPush();

    return () => {
      window.OneSignal = undefined;
    };
  }, [user]);

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
    status: 1,
  });

  return { props: { questions } };
};
