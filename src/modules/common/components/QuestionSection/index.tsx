import { useEffect, useRef, useState } from 'react';

import subjects from '@/data/subjects';

import Carousel from '@/shared/components/Carousel';
import MakeQuestionMobile from '@/shared/components/MakeQuestionBox/Mobile';
import MakeQuestionWeb from '@/shared/components/MakeQuestionBox/Web';
import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import QuestionBox from '@/shared/components/QuestionBox';
import SectionBordered, {
  BorderTypes,
} from '@/shared/components/SectionBordered';

import { useQuestion } from '../../hooks/question';

import { Container } from './styles';
import { UserSection } from '../UserSection';

interface QuestionSectionProps {
  step: number;
}

const QuestionSection = ({ step }: QuestionSectionProps) => {
  const { getQuestions, questions } = useQuestion();
  const divInfiteScrollRef = useRef<HTMLDivElement>();
  const [page, setPage] = useState(0);
  const [notFoundQuestions, setNotFoundQuestions] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async ([entries]) => {
      const ratio = entries.intersectionRatio;

      if (ratio > 0 && !notFoundQuestions) {
        setPage(state => state + 1);
      }
    });

    if (divInfiteScrollRef.current)
      intersectionObserver.observe(divInfiteScrollRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiteScrollRef, notFoundQuestions]);

  useEffect(() => {
    async function searchQuestions() {
      if (page > 0) {
        const quantityFound = await getQuestions(page);

        if (!quantityFound) {
          setNotFoundQuestions(true);
        }
      }
    }

    searchQuestions();
  }, [getQuestions, page]);

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
        <div ref={divInfiteScrollRef} />
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
