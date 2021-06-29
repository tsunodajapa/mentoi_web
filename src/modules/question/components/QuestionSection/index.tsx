import subjects from '@/data/subjects';

import Carousel from '@/shared/components/Carousel';
import MakeQuestionMobile from '@/modules/question/components/MakeQuestionBox/Mobile';
import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import QuestionBox from '@/modules/question/components/QuestionBox';
import SectionBordered from '@/shared/components/SectionBordered';
import InfiniteScroll from '@/shared/components/InfiniteScroll';

import { useAuth } from '@/shared/hooks/auth';

import { useQuestion } from '../../hooks/question';

import MakeQuestionWeb from '../MakeQuestionBox/Web';
import { Container } from './styles';
import { UserSection } from '../../../common/components/UserSection';
import FiltersBox from '../FiltersBox';

interface QuestionSectionProps {
  step: number;
}

const QuestionSection = ({ step }: QuestionSectionProps) => {
  const { getQuestions, questions } = useQuestion();
  const { user } = useAuth();

  return (
    <Container step={step}>
      <div>
        {user && (
          <>
            <SectionBordered>
              <MakeQuestionWeb />
            </SectionBordered>
            <Carousel data={subjects} onlyWeb />
          </>
        )}
        <SectionBordered>
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
        <InfiniteScroll
          getService={getQuestions}
          allowedFilters={['q', 'areaInterest']}
        />
      </div>
      <div />
      <MakeQuestionMobile />
      <div />
      <div>
        <UserSection />
        {!user && <FiltersBox />}
      </div>
    </Container>
  );
};

export { QuestionSection };
