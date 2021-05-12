import { useAuth, User } from '@/shared/hooks/auth';
import { useRouter } from 'next/router';
import { createContext, useCallback, useContext, useState } from 'react';
import * as questionsServices from '../services/questionsServices';

export interface Answer {
  id: string;
  text: string;
  user: Omit<User, 'id' | 'email' | 'permission' | 'areasInterest'>;
  elapsedTime: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAnswer {
  text: string;
}

interface AnswerContextData {
  answers: Answer[];
  createAnswer(data: CreateAnswer): Promise<void>;
  getAnswers(page: number): Promise<number>;
}

const AnswerContext = createContext<AnswerContextData>({} as AnswerContextData);

const AnswerProvider: React.FC = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { user } = useAuth();
  const router = useRouter();

  const createAnswer = async (data: CreateAnswer) => {
    const { id: questionId } = router.query;

    const answer = await questionsServices.createAnswer(
      questionId as string,
      data,
    );

    setAnswers(state => [{ ...answer, user }, ...state]);
  };

  const getAnswers = useCallback(
    async (page: number) => {
      const { id: questionId } = router.query;

      const answersFound = await questionsServices.getAnswers(
        questionId as string,
        {
          page,
          pageSize: 10,
        },
      );

      setAnswers(state => [...state, ...answersFound]);

      return answersFound.length;
    },
    [router.query],
  );

  return (
    <AnswerContext.Provider value={{ createAnswer, getAnswers, answers }}>
      {children}
    </AnswerContext.Provider>
  );
};

function useAnswer(): AnswerContextData {
  const context = useContext(AnswerContext);

  return context;
}

export { AnswerProvider, useAnswer };
