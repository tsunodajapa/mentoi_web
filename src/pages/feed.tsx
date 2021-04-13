import Image from 'next/image';

import Header from '@/modules/common/components/Header';
import Carousel from '@/shared/Carousel';
import ContentBox from '@/shared/ContentBox';
import Onboarding from '@/shared/Onboarding';
import OnboardingTemplate from '@/shared/Onboarding/OnboardingTemplate';
import QuestionBox from '@/shared/QuestionBox';
import SectionBordered, { BorderTypes } from '@/shared/SectionBordered';

import { Container, Profile, Row } from '@/styles/pages/feed';

import { useState } from 'react';

import ProgressCircle from '@/shared/ProgressCircle';
import { Circle } from '@/shared/Circle';
import Footer from '@/modules/common/components/Footer';

import subjects from 'data/subjects';
import MakeQuestionWeb from '@/shared/MakeQuestionBox/Web';
import MakeQuestionMobile from '@/shared/MakeQuestionBox/Mobile';

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
      <Container step={actualStep}>
        <div>
          <div>
            <SectionBordered border={BorderTypes.TOP}>
              <MakeQuestionWeb />
            </SectionBordered>
            <Carousel data={subjects} onlyWeb />
            <SectionBordered border={BorderTypes.BOTTOM}>
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <QuestionBox />
              <OnboardingTemplate
                title="Teste Card"
                description="teste mensagem 2"
              >
                <QuestionBox />
              </OnboardingTemplate>
            </SectionBordered>
          </div>
          <div />
          <MakeQuestionMobile />
          <div />
          <div>
            <ContentBox>
              <Profile>
                <div>
                  <ProgressCircle percentage={90} />

                  {/* <Image
                    src="/test_profile_.jpg"
                    alt="Professor CZ"
                    layout="fill"
                  /> */}

                  <Circle size={70} />
                </div>
                <strong>Professor CZ</strong>
                <span>@professorczx</span>
              </Profile>

              <Row>
                <span>Avaliações</span>
              </Row>
              <Row>
                <span>Prêmios</span>
              </Row>
            </ContentBox>
          </div>
        </div>

        <Footer changeStep={handleChangeStep} />
      </Container>
      {/* <Onboarding /> */}
    </>
  );
};

export default Feed;
