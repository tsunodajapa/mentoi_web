import Header from '@/modules/common/components/Header';
import HeaderLogouted from '@/modules/logouted/components/Header';

import { useState } from 'react';

import Footer from '@/modules/common/components/Footer';

import { QuestionProvider } from '@/modules/question/hooks/question';
import { QuestionSection } from '@/modules/question/components/QuestionSection';
import { Main } from '@/shared/components/Main/styles';
import SEO from '@/shared/components/SEO';
import { useAuth } from '@/shared/hooks/auth';

const Feed = () => {
  const { user } = useAuth();

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

  return (
    <>
      <SEO
        title="Plataforma Educacional para Professores e Alunos | Mentoi"
        description="Plataforma educacional para interação entre estudantes e professores com atuação verificada, garantindo responsabilidade e evitando respostas com erros ou Fake News."
      />
      {user && <Header actualNameStep={actualNameStep[actualStep]} />}
      {!user && <HeaderLogouted />}
      <Main>
        <QuestionProvider>
          <QuestionSection step={actualStep} />
        </QuestionProvider>
      </Main>
      {user && <Footer changeStep={handleChangeStep} />}
    </>
  );
};

export default Feed;
