import { useAuth, User } from '@/shared/hooks/auth';
import { FilterToGet } from '@/shared/services/IFilterDTO';
import { createContext, useCallback, useContext, useState } from 'react';
import * as questionsServices from '../services/questionsServices';

export interface CreateQuestionData {
  title: string;
  description: string;
  areasInterest?: string[];
  files: File[];
}

export interface Question {
  id: string;
  title: string;
  description: string;
  areasInterest?: {
    id: string;
    name: string;
  }[];
  files?: {
    id: string;
    fileName: string;
    mimeType: string;
    fileUrl: string;
  }[];
  user: Omit<User, 'id' | 'email' | 'permission' | 'areasInterest'>;
  elapsedTime: string;
}

interface QuestionContextData {
  questions: Question[];
  createQuestion(message: FormData): Promise<void>;
  getQuestions(filters: FilterToGet): Promise<number>;
  removeQuestion(id: string): void;
}

interface FilterQuestions extends FilterToGet {
  areaInterest: string;
}

const QuestionContext = createContext<QuestionContextData>(
  {} as QuestionContextData,
);

const QuestionProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { user } = useAuth();

  const createQuestion = async (data: FormData) => {
    const question = await questionsServices.createQuestion(data);

    setQuestions(state => [{ ...question, user }, ...state]);
  };

  const getQuestions = useCallback(
    async (filters: FilterQuestions) => {
      const userId =
        filters.areaInterest === 'me' && user.id ? user.id : undefined;

      const questionsFound = await questionsServices.getQuestions({
        ...filters,
        pageSize: 10,
        userId,
      });

      if (filters.page === 1) {
        setQuestions(questionsFound);
      } else {
        setQuestions(state => [...state, ...questionsFound]);
      }

      return questionsFound.length;
    },
    [user.id],
  );

  const removeQuestion = (id: string) => {
    const questionsWithoutDeleted = questions.filter(
      question => question.id !== id,
    );

    setQuestions(questionsWithoutDeleted);
  };

  return (
    <QuestionContext.Provider
      value={{ createQuestion, getQuestions, removeQuestion, questions }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

function useQuestion(): QuestionContextData {
  const context = useContext(QuestionContext);

  return context;
}

export { QuestionProvider, useQuestion };
