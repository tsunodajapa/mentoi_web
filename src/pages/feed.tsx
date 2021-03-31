import Image from 'next/image';

import Header from '@/modules/common/components/Header';
import Carousel from '@/shared/Carousel';
import ContentBox from '@/shared/ContentBox';
import MakeQuestionBox from '@/shared/MakeQuestionBox';
import Onboarding from '@/shared/Onboarding';
import OnboardingTemplate from '@/shared/Onboarding/OnboardingTemplate';
import QuestionBox from '@/shared/QuestionBox';
import SectionBordered, { BorderTypes } from '@/shared/SectionBordered';

import { Container, Profile, Circle } from '@/styles/pages/feed';

import subjects from 'data/subjects';
import ProgressCircle from '@/shared/ProgressCircle';

const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <div>
            <SectionBordered border={BorderTypes.TOP}>
              <MakeQuestionBox />
            </SectionBordered>
            <Carousel data={subjects} />
            <SectionBordered border={BorderTypes.BOTTOM}>
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
          <div>
            <ContentBox>
              <Profile>
                <div>
                  <ProgressCircle percentage={65.8} />

                  <Image
                    src="/test_profile.jpg"
                    alt="Professor CZ"
                    layout="fill"
                  />

                  {/* <Circle /> */}
                </div>
                <span>Professor CZ</span>
                <span>@professorcz</span>
              </Profile>

              <div>Avaliações</div>
              <div>Prêmios</div>
            </ContentBox>
          </div>
        </div>
      </Container>
      <Onboarding />
    </>
  );
};

export default Feed;
