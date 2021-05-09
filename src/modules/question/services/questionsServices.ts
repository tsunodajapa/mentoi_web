import api from '@/shared/services/api';
import { FilterToGet } from '@/shared/services/IFilterDTO';
import { Answer } from '../hooks/answer';
import { Question } from '../hooks/question';

export async function createQuestion(data: FormData): Promise<Question> {
  return (await api.post('questions', data)).data;
}

export async function getQuestions(params?: FilterToGet): Promise<Question[]> {
  return (
    await api.get<Question[]>('questions', {
      params,
    })
  ).data;
}

export async function showQuestion(id: string): Promise<Question> {
  return (await api.get<Question>(`questions/${id}`)).data;
}

export async function createAnswer(
  id: string,
  data: { text: string },
): Promise<Answer> {
  return (await api.post<Answer>(`questions/${id}/answers`, data)).data;
}

export async function getAnswers(
  id: string,
  params: FilterToGet,
): Promise<Answer[]> {
  return (await api.get<Answer[]>(`questions/${id}/answers`, { params })).data;
}
