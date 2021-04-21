import api from '@/shared/services/api';
import { Question } from '../hooks/question';
import { CreateQuestionData } from '../hooks/question';

export async function createQuestion(data: FormData): Promise<Question> {
  return (
    await api.post('questions', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  ).data;
}

export async function getQuestions(): Promise<Question[]> {
  return (await api.get<Question[]>('questions')).data;
}
