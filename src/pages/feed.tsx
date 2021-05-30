import Header from '@/modules/common/components/Header';

import { useState } from 'react';

import Footer from '@/modules/common/components/Footer';

import { QuestionProvider } from '@/modules/question/hooks/question';
import { QuestionSection } from '@/modules/question/components/QuestionSection';
import { Main } from '@/shared/components/Main/styles';
import SEO from '@/shared/components/SEO';

const Feed = () => {
  const [actualStep, setActualStep] = useState(0);
  const actualNameStep = [
    'ÁREA DE INTERESSE',
    'ATUALIZAÇÕES',
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
      <Header actualNameStep={actualNameStep[actualStep]} />
      <Main>
        <QuestionProvider>
          <QuestionSection step={actualStep} />
        </QuestionProvider>
        <Footer changeStep={handleChangeStep} />
      </Main>
      {/* <Onboarding /> */}
    </>
  );
};

export default Feed;
