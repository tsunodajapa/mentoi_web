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

import { Container, Profile, Row } from '@/styles/pages/feed';

import { useState } from 'react';

import ProgressCircle from '@/shared/components/ProgressCircle';
import { Circle } from '@/shared/components/Circle';
import Footer from '@/modules/common/components/Footer';

import subjects from 'data/subjects';
import MakeQuestionWeb from '@/shared/components/MakeQuestionBox/Web';
import MakeQuestionMobile from '@/shared/components/MakeQuestionBox/Mobile';
import { useAuth } from '@/hooks/auth';

const Feed = () => {
  const { user } = useAuth();
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
            {user && (
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
                  <strong>{user.name}</strong>
                  <span>@{user.nickName}</span>
                </Profile>

                <Row>
                  <span>Avaliações</span>
                </Row>
                <Row>
                  <span>Prêmios</span>
                </Row>
              </ContentBox>
            )}
          </div>
        </div>

        <Footer changeStep={handleChangeStep} />
      </Container>
      {/* <Onboarding /> */}
    </>
  );
};

export default Feed;
