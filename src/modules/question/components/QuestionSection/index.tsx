import { useEffect } from 'react';

import MakeQuestionMobile from '@/modules/question/components/MakeQuestionBox/Mobile';
import OnboardingTemplate from '@/shared/components/Onboarding/OnboardingTemplate';
import QuestionBox from '@/modules/question/components/QuestionBox';
import SectionBordered, {
  BorderTypes,
} from '@/shared/components/SectionBordered';
import InfiniteScroll from '@/shared/components/InfiniteScroll';

import { useAuth } from '@/shared/hooks/auth';

import { Question, useQuestion } from '../../hooks/question';

import MakeQuestionWeb from '../MakeQuestionBox/Web';
import { Container } from './styles';
import { UserSection } from '../../../common/components/UserSection';
import FiltersBox from '../FiltersBox';

interface QuestionSectionProps {
  step: number;
  questions: Question[];
}

const QuestionSection = ({ step, questions }: QuestionSectionProps) => {
  const {
    getQuestions,
    addQuestions,
    getMyCreatedQuestions,
    questions: questionsByState,
    myCreatedQuestions,
  } = useQuestion();
  const { user } = useAuth();

  useEffect(() => {
    addQuestions(questions);
  }, [addQuestions, questions]);

  return (
    <Container step={step}>
      <div>
        {user && (
          <>
            <SectionBordered border={BorderTypes.BOTTOM}>
              <OnboardingTemplate
                id="make-question-onboarding-template-step-3"
                title="Faça uma pergunta"
                description="Caso não encontre uma pergunta, você pode faze-la clicando aqui."
              >
                <MakeQuestionWeb />
              </OnboardingTemplate>
            </SectionBordered>
          </>
        )}
        <SectionBordered border={BorderTypes.FULL}>
          {questionsByState &&
            questionsByState.map((question, index) => {
              if (!index) {
                return (
                  <OnboardingTemplate
                    id="feed-question-onboarding-template-step-5"
                    key={question.id}
                    title="Feed"
                    description="Aqui você pode acessar as perguntas feitas por outros usuários. As perguntas estão marcadas por conteúdo."
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
          initialPage={1}
        />
      </div>
      <div>
        <SectionBordered>
          {myCreatedQuestions &&
            myCreatedQuestions.map(question => (
              <QuestionBox
                key={question.id}
                data={question}
                idAlternative={`my-${question.id}`}
              />
            ))}
        </SectionBordered>
        <InfiniteScroll
          getService={getMyCreatedQuestions}
          allowedFilters={[]}
        />
      </div>
      <MakeQuestionMobile />
      <div>EM BREVE</div>
      <div>
        <aside>
          <UserSection />
          <FiltersBox />
        </aside>
      </div>
    </Container>
  );
};

export { QuestionSection };
