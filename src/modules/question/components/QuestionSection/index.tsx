import { useEffect, useRef, useState } from 'react';

import subjects from '@/data/subjects';

import Carousel from '@/shared/components/Carousel';
import MakeQuestionMobile from '@/modules/question/components/MakeQuestionBox/Mobile';
import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import QuestionBox from '@/modules/question/components/QuestionBox';
import SectionBordered, {
  BorderTypes,
} from '@/shared/components/SectionBordered';
import InfiniteScroll from '@/shared/components/InfiniteScroll';
import MakeQuestionWeb from '../MakeQuestionBox/Web';

import { useQuestion } from '../../hooks/question';

import { Container } from './styles';
import { UserSection } from '../../../common/components/UserSection';

interface QuestionSectionProps {
  step: number;
}

const QuestionSection = ({ step }: QuestionSectionProps) => {
  const { getQuestions, questions } = useQuestion();

  return (
    <Container step={step}>
      <div>
        <SectionBordered border={BorderTypes.TOP}>
          <MakeQuestionWeb />
        </SectionBordered>
        <Carousel data={subjects} onlyWeb />
        <SectionBordered border={BorderTypes.BOTTOM}>
          {questions &&
            questions.map((question, index) => {
              if (!index) {
                return (
                  <OnboardingTemplate
                    key={question.id}
                    title="Teste Card"
                    description="teste mensagem 2"
                  >
                    <QuestionBox data={question} />
                  </OnboardingTemplate>
                );
              }
              return <QuestionBox key={question.id} data={question} />;
            })}
        </SectionBordered>
        <InfiniteScroll getService={getQuestions} />
      </div>
      <div />
      <MakeQuestionMobile />
      <div />
      <div>
        <UserSection />
      </div>
    </Container>
  );
};

export { QuestionSection };
