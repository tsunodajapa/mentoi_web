import { User } from '@/hooks/auth';
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
}

interface QuestionContextData {
  questions: Question[];
  createQuestion(message: FormData): Promise<void>;
  getQuestions(page: number): Promise<number>;
}

const QuestionContext = createContext<QuestionContextData>(
  {} as QuestionContextData,
);

const QuestionProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const createQuestion = async (data: FormData) => {
    const question = await questionsServices.createQuestion(data);

    setQuestions(state => [question, ...state]);
  };

  const getQuestions = useCallback(async (page: number) => {
    const questionsFound = await questionsServices.getQuestions({
      page,
      pageSize: 10,
    });

    setQuestions(state => [...state, ...questionsFound]);

    return questionsFound.length;
  }, []);

  return (
    <QuestionContext.Provider
      value={{ createQuestion, getQuestions, questions }}
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
