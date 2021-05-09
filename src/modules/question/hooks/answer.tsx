import { useAuth, User } from '@/hooks/auth';
import { createContext, useCallback, useContext, useState } from 'react';
import * as questionsServices from '../services/questionsServices';

export interface Answer {
  id: string;
  text: string;
  user: Omit<User, 'id' | 'email' | 'permission' | 'areasInterest'>;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateAnswer {
  text: string;
}

interface AnswerContextData {
  answers: Answer[];
  createAnswer(questionId: string, data: CreateAnswer): Promise<void>;
  getAnswers(id: string, page: number): Promise<number>;
}

const AnswerContext = createContext<AnswerContextData>({} as AnswerContextData);

const AnswerProvider: React.FC = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { user } = useAuth();

  const createAnswer = async (questionId: string, data: CreateAnswer) => {
    const answer = await questionsServices.createAnswer(questionId, data);

    setAnswers(state => [{ ...answer, user }, ...state]);
  };

  const getAnswers = useCallback(async (questionId: string, page: number) => {
    const answersFound = await questionsServices.getAnswers(questionId, {
      page,
      pageSize: 10,
    });

    setAnswers(state => [...state, ...answersFound]);

    return answersFound.length;
  }, []);

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
