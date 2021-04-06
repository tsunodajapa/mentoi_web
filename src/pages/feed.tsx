import Image from 'next/image';

import Header from '@/modules/common/components/Header';
import Carousel from '@/shared/Carousel';
import ContentBox from '@/shared/ContentBox';
import MakeQuestionBox from '@/shared/MakeQuestionBox';
import Onboarding from '@/shared/Onboarding';
import OnboardingTemplate from '@/shared/Onboarding/OnboardingTemplate';
import QuestionBox from '@/shared/QuestionBox';
import SectionBordered, { BorderTypes } from '@/shared/SectionBordered';

import { Container, Profile, Row } from '@/styles/pages/feed';

import subjects from 'data/subjects';
import ProgressCircle from '@/shared/ProgressCircle';
import { Circle } from '@/shared/Circle';
import Footer from '@/modules/common/components/Footer';

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
                  <ProgressCircle percentage={90} />

                  {/* <Image
                    src="/test_profile_.jpg"
                    alt="Professor CZ"
                    layout="fill"
                  /> */}

                  <Circle size={70} />
                </div>
                <strong>Professor CZ</strong>
                <span>@professorcz</span>
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

        <Footer />
      </Container>
      {/* <Onboarding /> */}
    </>
  );
};

export default Feed;
