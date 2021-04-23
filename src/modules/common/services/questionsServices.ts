import api from '@/shared/services/api';
import { Question } from '../hooks/question';

interface FilterToGetQuestion {
  page?: number;
  pageSize?: number;
}

export async function createQuestion(data: FormData): Promise<Question> {
  return (
    await api.post('questions', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  ).data;
}

export async function getQuestions(
  params?: FilterToGetQuestion,
): Promise<Question[]> {
  return (
    await api.get<Question[]>('questions', {
      params,
    })
  ).data;
}
