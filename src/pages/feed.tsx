import Image from 'next/image';

import Header from '@/modules/common/components/Header';
import Carousel from '@/shared/components/Carousel';
import ContentBox from '@/shared/components/ContentBox';
import Onboarding from '@/shared/components/Onboarding';
import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import QuestionBox from '@/shared/components/QuestionBox';
import SectionBordered, {
  BorderTypes,
} from '@/shared/components/SectionBordered';

import { Container } from '@/styles/pages/feed';

import { useState } from 'react';

import Footer from '@/modules/common/components/Footer';

import { QuestionProvider } from '@/modules/common/hooks/question';
import { QuestionSection } from '@/modules/common/components/QuestionSection';

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
      <Header actualNameStep={actualNameStep[actualStep]} />
      <Container>
        <QuestionProvider>
          <QuestionSection step={actualStep} />
        </QuestionProvider>
        <Footer changeStep={handleChangeStep} />
      </Container>
      {/* <Onboarding /> */}
    </>
  );
};

export default Feed;
