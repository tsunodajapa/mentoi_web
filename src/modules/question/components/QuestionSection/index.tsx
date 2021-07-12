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
              <OnboardingTemplate
                id="make-question-onboarding-template-step-3"
                title="Faça uma pergunta"
                description="Caso não encontre uma pergunta, você pode faze-la clicando aqui."
              >
                <MakeQuestionWeb />
              </OnboardingTemplate>
            </SectionBordered>
            <OnboardingTemplate
              id="filters-question-onboarding-template-step-4"
              title="Conteúdo"
              description="Aqui você pode filtrar as perguntas do feed por conteúdo."
            >
              <Carousel data={subjects} onlyWeb />
            </OnboardingTemplate>
          </>
        )}
        <SectionBordered>
          {questions &&
            questions.map((question, index) => {
              if (!index) {
                return (
                  <OnboardingTemplate
                    id="feed-question-onboarding-template-step-5"
                    key={question.id}
                    title="Feed"
                    description="Aqui você pode acessar as perguntas feitas por outros usuários. As perguntas estão marcadas por conteúdo.
                    "
                  >
                    <QuestionBox data={question} />
                  </OnboardingTemplate>
                );
              }
              if (index === 2) {
                return (
                  <OnboardingTemplate
                    key={question.id}
                    id="feed-2-question-onboarding-template-step-6"
                    title="Feed teste 2"
                    description="Aqui você pode acessar as perguntas feitas por outros usuários. As perguntas estão marcadas por conteúdo.
                    "
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
